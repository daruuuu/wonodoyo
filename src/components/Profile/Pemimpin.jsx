import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import leader from "../../assets/icon/leader.png";

function Pemimpin() {
  const pemimping = [
    {
      nama: "Eyang Honggo Wongso",
      putra: "",
      tahun: "1687-1737",
    },
    {
      nama: "Eyang Prenco ",
      putra: "Putra Eyang Honggo Wongso ",
      tahun: "1737-1797",
    },
    {
      nama: "Eyang Kerto Joyo ",
      putra: "Putra Eyang Prenco",
      tahun: "1797-1867",
    },
    {
      nama: "Eyang Demang Kerto Pawiro  ",
      putra: "Putra Eyang Kerto Jaya",
      tahun: "1867-1950",
    },
    {
      nama: " Simbah Hadi Sunarto  ",
      putra: "Putra Eyang Demang Kerto Pawiro",
      tahun: "1950-1967",
    },
    {
      nama: "Bp. Sastro Sutrisno",
      putra: "",
      tahun: "1967-1982",
    },
    {
      nama: "Bp. Muhtarhadi",
      putra: "",
      tahun: "1982-1998",
    },
    {
      nama: "Bp. Bambang Widodo ",
      putra: "Putra Mbah Hadi Sunarto ",
      tahun: "1998-2013",
    },
    {
      nama: "Bp. Tarto ",
      putra: "Putu Eyang Kerto Pawira  ",
      tahun: "2013-2019",
    },
    {
      nama: "Bp. Tarto ",
      putra: "Putu Eyang Kerto Pawira  ",
      tahun: "2019-2025",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <img style={{ width: "40px" }} src={leader} alt="" />
      </div>
      <h2 className="text-center">Pemimpin</h2>
      <ListGroup as="ol" numbered>
        {pemimping.map((pemimpin, index) => {
          return (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-center"
              style={{ background: "transparent" }}
              key={index}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold"> {pemimpin.nama} </div>
                <div className="text-muted"> {pemimpin.putra} </div>
              </div>
              <Badge bg="dark">{pemimpin.tahun}</Badge>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Pemimpin;
