import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import arrow from "../public/icons/right-arrow.png";
import logo from "../public/logo/logo.png";
import facebook from "../public/footer/fb.png";
import instagram from "../public/footer/insta.png";
import twitter from "../public/footer/twitter.png";
import pin from "../public/footer/pinterest.png";
import yt from "../public/footer/yt.png";

const Footer = () => {
  return (
    <Container className="footer my-5">
      <div className="row g-5">
        <div className="col-12 col-lg-6">
          <h1>Ready to join us ?</h1>
          <a href="">
            Register Now <Image className="ms-2" src={arrow} alt="arrow" />
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <a href="">Speakers</a>
              <a href="">Programme</a>
              <a href="">Tickets</a>
            </div>
            <div className="d-flex flex-column">
              <a href="">Gallery</a>
              <a href="">Our Partners</a>
              <a href="">Post Conference Workshop</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row g-5 mt-3">
        <div className="col-12 col-lg-6">
          <a href="">
            <Image className="ms-2" src={logo} alt="arrow" />
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="">
            <p>@2023. All right resereved</p>
            </div>
            <div className="icon d-flex align-items-center justify-content-center text-white">
            <a href="">
              {" "}
              <Image src={twitter} />
            </a>
            <a href="">
              {" "}
              <Image src={facebook} />
            </a>
            <a href="">
              {" "}
              <Image src={instagram} />
            </a>
            <a href="">
              {" "}
              <Image src={yt} />
            </a>
            <a href="">
              {" "}
              <Image src={pin} />
            </a>
          </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
