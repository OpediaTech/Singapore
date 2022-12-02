import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";
import LineUp from "../components/Exhibitors/LineUp";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery/Gallery";
import KeynoteSpeakers from "../components/Speakers/KeynoteSpeakers";
import Speakers from "../components/Speakers/Speakers";
import SupportingOgn from "../components/SupportingOgzn/SupportingOgn";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Speakers minLength={0} maxLength={8} />
      <LineUp />
      <div className="section_gap">
        <Gallery length={4} />
        <div className="text-center">
          <Button className="see_all_btn">See All Photos</Button>
        </div>
      </div>
      <div className="section_gap">
        <SupportingOgn length={2} />
        <div className="text-center">
          <Button className="see_all_btn">See All Organizations</Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
