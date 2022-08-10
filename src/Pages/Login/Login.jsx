import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../Layout/Layout";
import LoginForm from "../../components/Auth/LoginForm";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <Layout>
      <Container className={`${styles.card} my-5 text-center`}>
        <LoginForm />
      </Container>
    </Layout>
  );
};

export default Login;
