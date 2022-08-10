import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

import styles from "./Navbar.module.css";

function Navigation() {
  const [user] = useAuthState(auth);

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className={styles.nav}
      style={{ top: "0", width: "100%", zIndex: "1000" }}
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-black" to="/">
            Wonodoyo-Ku
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link className="text-black" to="/profile">
                Profil Desa
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black" to="/statistic">
                Data Statistik
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black" to="/gallery">
                Galeri
              </Link>
            </Nav.Link>
            <NavDropdown
              title={<span style={{ color: "black" }}>Lainnya</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link className="text-black" to="/kegiatan">
                  Kegiatan
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {!user && (
                <NavDropdown.Item>
                  <Link className="text-black" to="/login">
                    Login
                  </Link>
                </NavDropdown.Item>
              )}
              {user && (
                <NavDropdown.Item>
                  <Button
                    className="text-white"
                    style={{ backgroundColor: "#527348" }}
                    onClick={() => {
                      signOut(auth);
                      toast.success("Logout Berhasil");
                    }}
                  >
                    Logout
                  </Button>
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
