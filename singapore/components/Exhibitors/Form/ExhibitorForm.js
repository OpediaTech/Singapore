import React from "react";
import { Button, Container, Form } from "react-bootstrap";

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
        <h2 className="accomodation_bluetitle text-center mb-5">Fill up the form</h2>
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
          <p>Which day(s) will you be attending the exhibition?</p>
          {options.map((option, index) => (
            <div key={index} className="d-flex mb-3">
              <Form.Check
                inline
                label={option.label}
                name={option.name}
                type="radio"
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-5">
            <Button className="inputField border-0 text-black px-5">Save as Draft</Button>
            <Button className="learn_more_btn text-white fw-bold">Next</Button>

        </div>
      </Form>
    </Container>
  );
};

export default ExhibitorForm;
