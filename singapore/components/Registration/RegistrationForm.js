import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const RegistrationForm = () => {
  const options = [
    {
      label: "Association Member",
      name: "option1",
    },
    {
      label: "Student",
      name: "option2",
    },
    {
      label: "Not Applicable",
      name: "option3",
    },
  ];
  return (
    <Container className="section_gap">
      <Form>
        <div className="row g-5">
          <div className="col-12 col-lg-6">
             <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold mb-3">Salutation</Form.Label>
              <Form.Select className="mb-5 inputField border-0" aria-label="Default select example">
           
              <option>Enter your answer</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </Form.Group> 
           

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold mb-3">Email</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="email"
                placeholder="Enter your Email"
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold mb-3">Company Name</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="text"
                placeholder="Enter your Answer"
              />
            </Form.Group>
            <div>
          <p className="fw-bold">Membership Type</p>
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
        <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold mb-3">Are you registering Individually or for a group?</Form.Label>
              <Form.Select className="mb-5 inputField border-0" aria-label="Default select example">
           
              <option>Select your answer</option>
              <option value="1">Individual</option>
              <option value="2">Group</option>
            </Form.Select>
            </Form.Group> 
        <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold mb-3">How many attendees are there in your group?</Form.Label>
              <Form.Select className="mb-5 inputField border-0" aria-label="Default select example">
           
              <option>Select your answer</option>
              <option value="1">4</option>
              <option value="2">5</option>
              <option value="2">7</option>
              <option value="2">9</option>
            </Form.Select>
            </Form.Group> 
          </div>
          <div className="col-12 col-lg-6">
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="fw-bold mb-3">
                Name (First & Last Name only)
              </Form.Label>
              <Form.Control
                className="inputField border-0"
                type="text"
                placeholder="Enter your answer"
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold mb-3">Designation</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="text"
                placeholder="Enter your answer"
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="fw-bold mb-3">Contact Number</Form.Label>
              <Form.Control
                className="inputField border-0"
                type="number"
                placeholder="Enter your answer"
              />
            </Form.Group>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <Button className="inputField border-0 text-muted px-5">
            Save as Draft
          </Button>
          <Button className="learn_more_btn text-white fw-bold">Next</Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
