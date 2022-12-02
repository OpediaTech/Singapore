import Image from "next/image";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import confirm from "../../../public/icons/confirmation.png";

const ExhibitorForm = () => {
  const options = [
    {
      label: "Day 1 Wed (31 Aug)",
      name: "option1",
    },
    {
      label: "Day 2 Thu (1 Sept)",
      name: "option2",
    },
    {
      label: "Both Days (31 Aug & 1 Sept)",
      name: "option3",
    },
  ];
  return (
    <Container className="section_gap">
      <h2 className="accomodation_bluetitle text-center mb-5">
        Fill up the form
      </h2>
      <Form>
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold mb-3">Name</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="text"
                placeholder="Enter your answer"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold mb-3">Contact</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="number"
                placeholder="Enter your answer"
              />
            </Form.Group>
          </div>
          <div className="col-12 col-lg-6">
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold mb-3">Email address</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="email"
                placeholder="Enter your answer"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold mb-3">Company</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="text"
                placeholder="Enter your answer"
              />
            </Form.Group>
          </div>
        </div>

        <div>
          <p className="fw-bold">
            Which day(s) will you be attending the exhibition?
          </p>
          {options.map((option, index) => (
            <div key={index} className="d-flex mb-3">
              <Form.Check
                className="radioOption d-inline"
                label={option.label}
                name={option.name}
                type="radio"
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-5">
          <Button className="inputField border-0 text-muted px-5">
            Save as Draft
          </Button>
          <Button className="learn_more_btn text-white fw-bold">Next</Button>
        </div>
      </Form>

      {/* Referral code part start*/}
      <div className="my-5">
        <Form>
          <div className="col-12 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold mb-3">Referral code</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="text"
                placeholder="Enter your answer"
              />
            </Form.Group>
          </div>
        </Form>
        <div className="d-flex justify-content-between mt-5">
          <Button className="inputField border-0 text-muted px-5">Back</Button>
          <Button className="learn_more_btn text-white fw-bold">Next</Button>
        </div>
      </div>
      {/* Referral code part start*/}
      {/* Agreement code part start*/}
      <div className="my-5">
        <h2 className="accomodation_bluetitle">Agreement</h2>
        <p className="fw-bold mt-5 mb-3">
          In addition, if you would like to receive future marketing materials
          from IEH, not limited to the Ergonomics & Hygiene 2022 conference and
          exhibition, kindly give your consent below.
        </p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label radioOption" for="flexRadioDefault1">
            I wish to receive marketing materials from IEH in the future
          </label>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <Button className="inputField border-0 text-muted px-5">Back</Button>
          <Button className="learn_more_btn text-white fw-bold">Submit</Button>
        </div>
      </div>
      {/* modal part start */}
      <div className="text-center">
        <Button className="learn_more_btn fw-bold mb-5">
          Ergonomics and Hygiene Exhibition
        </Button>
        <h5 className="">
          Thank you for registering for the Ergonomics and Hygiene <br />
          2022 Exhibition
        </h5>
        <p>
          A confirmation email will be sent after submission. We will then send
          you an invoice within 1 <br/> working day and advice on the mode of payment.
        </p>
        <Image src={confirm} alt="confirm"/>
        <p>You can print a copy of your answer after you submit.</p>
        <div className="d-flex justify-content-center mt-5">
          <Button className="inputField border-0 text-muted px-5 me-4">Back</Button>
          <Button className="submit_btn px-4 text-white fw-bold">Submitted</Button>
        </div>
      </div>
      {/* modal part end */}
      {/* Agreement code part end*/}  
    </Container>
  );
};

export default ExhibitorForm;

