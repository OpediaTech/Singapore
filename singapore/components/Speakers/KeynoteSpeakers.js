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
import Image from "next/image";
import SpeakerCard from "./SpeakerCard";

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
      <h3 className="text-center fw-bold title">Keynote Speakers</h3>
      <div className="row g-5">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker}></SpeakerCard>
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
