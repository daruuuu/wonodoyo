import React from "react";
import { Container } from "react-bootstrap";

import { auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

import DeleteButton from "../../components/DeleteButton/DeleteButton";

import styles from "./Card.module.css";

const Card = (props) => {
  const [user] = useAuthState(auth);

  return (
    <Container key={props.id} className={`${styles.card} p-5 my-5`}>
      <div className="text-center mb-3">
        <img
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
          src={props.imgUrl}
          alt="kegiatan"
          loading="lazy"
        />
      </div>
      <h2 style={{ color: "#52734D" }}>{props.title}</h2>
      <p className="text-muted">{props.createdAt.toDate().toDateString()}</p>
      <p style={{ color: "#52734D" }}>{props.description}</p>
      {user && <DeleteButton id={props.id} imgUrl={props.imgUrl} />}
    </Container>
  );
};

export default Card;
