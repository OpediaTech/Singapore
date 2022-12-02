import Head from "next/head";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import Partners from "../components/Exhibitors/Partners";
import LineUp from "../components/Exhibitors/LineUp";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery/Gallery";
import KeynoteSpeakers from "../components/Speakers/KeynoteSpeakers";
import Speakers from "../components/Speakers/Speakers";
import SupportingOgn from "../components/SupportingOgzn/SupportingOgn";
import styles from "../styles/Home.module.css";
import SpeakerHeading from "../components/Speakers/SpeakerHeading";

export default function Home() {
  return (
    <div>
      <Container className="section_gap">
        <div className="d-flex justify-content-between align-items-center my-5">
          <SpeakerHeading />
          <div>
            <a href="SpeakerPage">
              <Button className="see_all_btn">Explore All</Button>
            </a>
          </div>
        </div>
        <Speakers minLength={0} maxLength={8} />
      </Container>
      <Container className="section_gap">
        <h2 className="fw-bold mb-5">Our Partners & Supporters</h2>
        <Partners />
      </Container>
      <div className="section_gap">
        <Gallery length={4} />
        <div className="text-center">
          <a href="GalleryPage">
            <Button className="see_all_btn">See All Photos</Button>
          </a>
        </div>
      </div>
      <div className="section_gap">
        <SupportingOgn length={2} />
        <div className="text-center">
          <a href="SupportingOrganizations">
            <Button className="see_all_btn">See All Organizations</Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
