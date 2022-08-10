import React, { useState, useEffect, lazy, Suspense } from "react";
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
import { db, storage, auth } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";

import Layout from "../../Layout/Layout";

import styles from "./Kegiatan.module.css";
import FAB from "../../components/Navbar/FAB";
import { toast } from "react-toastify";

const Card = lazy(() => import("../../components/Card/Card"));

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

  const [user] = useAuthState(auth);

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

  useEffect(() => {
    const kegiatanRef = collection(db, "kegiatan");
    const q = query(kegiatanRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const kegiatan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKegiatan(kegiatan);
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
          <Suspense
            fallback={
              <Container className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </Container>
            }
          >
            <Card
              id={id}
              imgUrl={imgUrl}
              title={title}
              createdAt={createdAt}
              description={description}
            />
          </Suspense>
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
      {user && <FAB onclick={toggleShow} />}
    </Layout>
  );
};

export default Kegiatan;
