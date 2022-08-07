import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { Container, Form } from "react-bootstrap";
import { db, storage } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Layout from "../../Layout/Layout";

import styles from "./Kegiatan.module.css";
import FAB from "../../components/Navbar/FAB";
import { toast } from "react-toastify";

import DeleteButton from "../../components/DeleteButton/DeleteButton";

const Kegiatan = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const toggleShow = () => setBasicModal(!basicModal);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "kegiatan");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imgUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Kegiatan berhasil ditambahkan", { type: "success" });
              setProgress(0);
              setBasicModal(false);
            })
            .catch((err) => {
              toast("Error saat menghapus kegiatan", { type: "error" });
              setBasicModal(false);
            });
        });
      }
    );
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (formData.title === "" || formData.description === "" || image === "") {
  //       alert("Form harus diisi semua");
  //       return;
  //     }

  //     const storageRef = ref(storage, `/image/${Date.now()}${image.name}`);

  //     const uploadImg = uploadBytesResumable(storageRef, image);

  //     uploadImg.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progressPercent = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         setProgress(progressPercent);
  //       },
  //       (err) => {
  //         console.log(err);
  //       },
  //       () => {
  //         setFormData({
  //           title: "",
  //           description: "",
  //         });
  //         setImage(null);

  //         getDownloadURL(uploadImg.snapshot.ref).then((url) => {
  //           const kegiatanRef = collection(db, "kegiatan");
  //           addDoc(kegiatanRef, {
  //             title: formData.title,
  //             description: formData.description,
  //             image: url,
  //             createdAt: Timestamp.now().toDate(),
  //           })
  //             .then(() => {
  //               toast("Kegiatan berhasil ditambahkan", {
  //                 type: "success",
  //               });
  //             })
  //             .catch((err) => {
  //               toast("Ada kesalahan", {
  //                 type: "error",
  //               });
  //             });
  //         });
  //       }
  //     );
  //   };

  useEffect(() => {
    const kegiatanRef = collection(db, "kegiatan");
    const q = query(kegiatanRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const kegiatan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKegiatan(kegiatan);
      console.log(kegiatan);
    });
  }, []);

  return (
    <Layout>
      {kegiatan.length === 0 ? (
        <Container className={`${styles.card} my-5 text-center`}>
          <h2>No Content</h2>
        </Container>
      ) : (
        kegiatan.map(({ createdAt, id, description, title, imgUrl }) => (
          <Container key={id} className={`${styles.card} my-5`}>
            <div className="text-center mb-3">
              <img
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                src={imgUrl}
                alt="kegiatan"
                className={styles.img}
              />
            </div>
            <h2 style={{ color: "#52734D" }}>{title}</h2>
            <p className="text-muted">{createdAt.toDate().toDateString()}</p>
            <p style={{ color: "#52734D" }}>{description}</p>
            <DeleteButton id={id} imgUrl={imgUrl} />
          </Container>
        ))
      )}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Kegiatan</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <label htmlFor="">Judul Kegiatan</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <label htmlFor="">Deskripsi</label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <label>Masukkan Foto</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control"
                    onChange={(e) => handleImageChange(e)}
                  />
                </Form.Group>
                {progress === 0 ? null : (
                  <div className={styles.progress}>
                    <div
                      className="progress-bar progress-bar-striped mt-2"
                      style={{
                        width: `${progress}%`,
                      }}
                    >
                      {`uploading image ${progress} %`}
                    </div>
                  </div>
                )}
              </Form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                style={{
                  background: "transparent",
                  color: "#52734D",
                  boxShadow: "none",
                }}
                onClick={toggleShow}
              >
                Close
              </MDBBtn>
              <MDBBtn
                style={{ background: "#52734D", color: "#FEFFDE" }}
                onClick={handlePublish}
              >
                Tambahkan
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <FAB onclick={toggleShow} />
    </Layout>
  );
};

export default Kegiatan;
