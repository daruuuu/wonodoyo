import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.jabatan}</Card.Title>
        <Card.Text>{props.nama}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
