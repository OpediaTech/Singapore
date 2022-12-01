import React from "react";
import facebook from "../../public/speakers/icon/Facebook.png";
import instagram from "../../public/speakers/icon/instagram.png";
import twitter from "../../public/speakers/icon/twitter.png";
import Image from "next/image";
import Card from "react-bootstrap/Card";

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <Card className="border-0">
        <Image src={speaker.pic} alt="image" height="280" width="280" />
        <Card.Body className="text-center">
          <Card.Title className="name fw-bold">{speaker.name}</Card.Title>
          <Card.Text className="designation">
            {speaker.designation}{" "}
            <span className="fw-bold">{speaker.institude}</span>
          </Card.Text>
          <div className="icon d-flex align-items-center justify-content-center text-white">
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
              <Image src={twitter} />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SpeakerCard;
