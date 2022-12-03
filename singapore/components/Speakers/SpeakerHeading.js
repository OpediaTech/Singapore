import React from 'react';
import Image from 'next/image';
import radio from "../../public/speakers/icon/radio.png";

const SpeakerHeading = () => {
    return (
        <div className="">
        <div className="d-flex align-items-center">
          <Image src={radio} />
          <h2 style={{fontSize:"56px"}} className="ms-4 fw-bold">This Year’s Speakers</h2>
        </div>

        <p className="spk_con">We believe a great speaker can change the world by their voice</p>
      </div>
    );
};

export default SpeakerHeading;