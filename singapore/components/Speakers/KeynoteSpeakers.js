import Image from "next/image";
import React from "react";
import Card from "react-bootstrap/Card";
import facebook from "../../public/speakers/icon/Facebook.png";
import instagram from "../../public/speakers/icon/instagram.png";
import twitter from "../../public/speakers/icon/twitter.png";
import jhon from "../../public/speakers/keynote/jhon.png";
import robert from "../../public/speakers/keynote/robert.png";
import jason from "../../public/speakers/keynote/jeson.png";
import joanne from "../../public/speakers/keynote/joanne.png";
import mila from "../../public/speakers/keynote/mila.png";
import Norhazlina from "../../public/speakers/keynote/norhajlina.png";



const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Dr John Cherrie",
      pic: jhon,
      designation: "Principle Scientist at ",
      institude: "IOM",
    },
    {
      name: "Dr Robert Bridger",
      pic: robert,
      designation: "Consultant and Author in",
      institude: "Human Factors and Ergonomics",
    },
    {
      name: "Dr Jason Lee Kai Wei",
      pic: jason,
      designation: "Director,  ",
      institude: "Heat Resilience and Performance Centre",
    },
    {
      name: "Dr Joanne Crawford",
      pic: joanne,
      designation: "WorkSafe New Zealand Chair in",
      institude: " Health and Safety",
    },
    {
      name: "Dr Mila Tejamaya",
      pic: mila,
      designation: "Lecturer and researcher at ",
      institude: "Universitas Indonesia",
    },
    {
      name: "Norhazlina Mydin",
      pic: Norhazlina,
      designation: "President at  ",
      institude: "International Occupational Hygiene Association ",
    },
  ];
  return (
    <div className="container">
      <div className="row g-5">
        {speakers.map((speaker, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
