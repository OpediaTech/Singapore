import React from "react";
import marcel from "../../public/speakers/plenary/marcel.png";
import miranda from "../../public/speakers/plenary/miranda.png";
import zephan from "../../public/speakers/plenary/zephan.png";
import karanika from "../../public/speakers/plenary/karanika.png";
import jai from "../../public/speakers/plenary/jai.png";
import lee from "../../public/speakers/plenary/lee.png";
import david from "../../public/speakers/plenary/david.png";
import eric from "../../public/speakers/plenary/eric.png";
import been from "../../public/speakers/plenary/been.png";
import mehta from "../../public/speakers/plenary/mehta.png";
import SpeakerCard from "./SpeakerCard";


const PlenarySpeakers = () => {
  const speakers = [
    {
      name: "Marcel Le Roux",
      pic: marcel,
      designation: "Strategic Engagement Manager at",
      institude: " IOSH",
    },
    {
      name: "Dr Miranda Loh",
      pic: miranda,
      designation: "Research Team Lead -  ",
      institude: "IOM",
    },
    {
      name: "Zephan Chan Yu Yun",
      pic: zephan,
      designation: "Director of the Institute of  ",
      institude: "Ergonomics and Hygiene",
    },
    {
      name: "Nektarios Karanikas",
      pic: karanika,
      designation: "Associate Professor in",
      institude: " Health, Safety and Environment",
    },
    {
      name: "Jai Prakash",
      pic: jai,
      designation: "Senior Health and Safety Consultant at  ",
      institude: "Mackin EHS",
    },
    {
      name: "Dr Charles Lee",
      pic: lee,
      designation: "Associate Professor at  ",
      institude: "NAIHE",
    },
    {
      name: "Dr David Thomas",
      pic: david,
      designation: "Senior Lecturer at",
      institude: " Middlesex University",
    },
    {
      name: "Eric Ng",
      pic: eric,
      designation: "Director of  ",
      institude: "Absolute Instrument Systems (Pte.) Ltd.",
    },
    {
      name: "Dr Ang Keng Been",
      pic: been,
      designation:
        "Managing Director and Member of the Board of Directors at  ",
      institude: "SKC",
    },
    {
      name: "Mr Maharshi Mehta",
      pic: mehta,
      designation: "President Elect  ",
      institude: "IOHA",
    },
  ];

  return (
    <div className="container">
      <h3 className="text-center title fw-bold">Plenary Speakers</h3>
      <div className="row g-5">
        {speakers.map((speaker, index) => (
          <SpeakerCard
           
            key={index}
            speaker={speaker}
          ></SpeakerCard>
        ))}
      </div>
    </div>
  );
};

export default PlenarySpeakers;
