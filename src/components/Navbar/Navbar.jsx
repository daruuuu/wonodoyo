import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navigation() {
  // return (
  //   <Navbar
  //     sticky="top"
  //     expand="lg"
  //     className={styles.nav}
  //     style={{ top: "0", width: "100%", zIndex: "1000" }}
  //   >
  //     <Container>
  //       <Navbar.Brand>
  //         <Link className="text-black" to="/">
  //           Wonodoyo-Ku
  //         </Link>
  //       </Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse
  //         id="basic-navbar-nav"
  //         className="justify-content-end text-black"
  //       >
  //         <Nav>
  //           <Nav.Link>
  //             <Link className="text-black" to="/profile">
  //               Profil Desa
  //             </Link>
  //           </Nav.Link>
  //           <Nav.Link className="text-black">Galeri</Nav.Link>
  //           <NavDropdown
  //             title={<span style={{ color: "black" }}>Lainnya</span>}
  //             id="basic-nav-dropdown"
  //           >
  //             <NavDropdown.Item>Action</NavDropdown.Item>
  //             <NavDropdown.Item>Another action</NavDropdown.Item>
  //             <NavDropdown.Item>Something</NavDropdown.Item>
  //             <NavDropdown.Item>Separated link</NavDropdown.Item>
  //           </NavDropdown>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
