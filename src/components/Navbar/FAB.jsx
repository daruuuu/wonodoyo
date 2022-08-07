import React from "react";
import {
  Container,
  Button,
  lightColors,
  darkColors,
} from "react-floating-action-button";

const Fab = (props) => {
  return (
    <Container>
      <Button
        tooltip="Tambahkan Kegiatan"
        icon="fas fa-plus"
        rotate={true}
        styles={{
          backgroundColor: darkColors.grey,
          color: lightColors.white,
        }}
        onClick={props.onclick}
      />
    </Container>
  );
};

export default Fab;
