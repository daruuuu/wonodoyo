import React from "react";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "react-bootstrap";

const LoginForm = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("Berhasil login");
      navigate("/");
    } catch (error) {
      toast("Login gagal", { type: "error" });
      console.log(error.code);
    }
  };

  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid mb-3">
        <Button
          onClick={handleLogin}
          style={{ backgroundColor: "#527348" }}
          type="submit"
        >
          Submit
        </Button>
      </div>
      <div className="d-grid">
        <label className="custom-control-label" htmlFor="customCheck1">
          Hanya admin yang bisa login
        </label>
      </div>
    </form>
  );
};

export default LoginForm;
