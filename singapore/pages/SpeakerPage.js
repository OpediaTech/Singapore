import Image from "next/image";
import React from "react";
import KeynoteSpeakers from "../components/Speakers/KeynoteSpeakers";
import PlenarySpeakers from "../components/Speakers/PlenarySpeakers";
import radio from "../public/speakers/icon/radio.png";

const SpeakerPage = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center">
          <Image src={radio} />
          <h2 className="ms-4 fw-bold">This Year’s Speakers</h2>
        </div>

        <p className="title_content">We believe a great speaker can change the world by their voice</p>
      </div>
      <KeynoteSpeakers/>
      <PlenarySpeakers/>
    </div>
  );
};

export default SpeakerPage;
