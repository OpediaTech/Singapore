import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import KeynoteSpeakers from "../components/Speakers/KeynoteSpeakers";
import PlenarySpeakers from "../components/Speakers/PlenarySpeakers";
import SpeakerHeading from "../components/Speakers/SpeakerHeading";

const SpeakerPage = () => {
  return (
    <div>
      <Container className="mt-5">
        <SpeakerHeading />
      </Container>
      <KeynoteSpeakers />
      <PlenarySpeakers />
    </div>
  );
};

export default SpeakerPage;
