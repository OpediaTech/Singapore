import React from 'react';
import { Container } from 'react-bootstrap';

const AboutEgro = () => {
    return (
        <Container className='section_gap'>
        <h2 className="aboutTheErgoStyleH2">About the <span className='aboutTheErgoStyleH2Span'>ergonomics and hygiene</span> <br/>
        Conference 2023
       </h2>
  
       <p className="aboutTheErgoStyleP">TThe Ergonomics and Hygiene 2023 Conference and Exhibition will be held on August 31, 2023 and September 1, 2022, from 9.00 a.m. to 5.00 p.m. at the Institute of Ergonomics and Hygiene (IEH). The environmental health pollution conference will be held in person, and it will not be streamed online. The aims of the Ergonomics and Hygiene 2023 Conference and Exhibition are for occupational hygienists, ergonomicists, and all other health and safety professionals to network and share their practices through a conference setting; explore current available solutions and technologies in hazard control and work productivity;
  
  </p>
  
  <button className='aboutTheErgoStyleButton'>Explore Conference Details</button>
      </Container>
    );
};

export default AboutEgro;