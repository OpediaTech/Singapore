import Image from "next/image";
import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import listIcon from "../../public/icons/list.png";

const ExhibitorBanner = () => {
  const buttons = [
    {
      btnName: "Participent",
      className: "learn_more_btn",
    },
    {
      btnName: "Sponser",
      className: "exhibitor_btn",
    },
    {
      btnName: "Workshop",
      className: "exhibitor_btn",
    },
  ];
  return (
    <Container className="mt-5 section_gap">
      <div className="row g-5">
        <div className="col-12 col-lg-8">
          <h2>Ergonomics and hygiene Exhibition</h2>
          <div className="d-flex align-items-center exhibitor_content">
            <Image className="me-3" src={listIcon} alt="list" />
             <p className="m-0">Entry is Free of Charge</p>
          </div>
          <div className="d-flex align-items-center exhibitor_content">
            <Image className="me-3" src={listIcon} alt="list" />{" "}
            <p className="m-0">
              Ergonomics and hygiene Exhibition Attendees are entitled entry to
              the Exhibition halls only.
            </p>
          </div>
          <div className="d-flex align-items-center exhibitor_content">
            <Image className="me-3" src={listIcon} alt="list" />{" "}
            <p className="m-0">
              Register as a <a href="">ergonomics hygiene conference</a>{" "}
              delegate to gain full access.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <ButtonGroup aria-label="Basic example">
            {buttons.map((btn, index) => (
              <Button key={index} className={btn.className}>
                {btn.btnName}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </Container>
  );
};

export default ExhibitorBanner;
