import React from "react";
import { Container, Form } from "react-bootstrap";

const PaymentForm = () => {
  const options = [
    {
      label: "Corporate",
      name: "option1",
    },
    {
      label: "Self Sponsored",
      name: "option2",
    },
  ];
  return (
    <Container>
        <div className="mb-5">
        <h2 className="accomodation_bluetitle ">Payment</h2>
      <p className="radioOption">
        Kindly ensure all the details you have provided is accurate as it will
        be reflected in the invoice.
      </p>
        </div>
     
      <Form>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Referral/Promo Code</Form.Label>{" "}
          <br />
          <Form.Label className="mb-3 radioOption">
            Please enter any promo/ referral code if applicable
          </Form.Label>
          <Form.Control
            className="inputField border-0"
            type="text"
            placeholder="Enter your answer"
          />
        </Form.Group>
        <div className="mb-5">
          <p className="fw-bold">Payment Method</p>
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
          <Form.Label className="fw-bold">
            Invoice Attention to & Billing Address
          </Form.Label>{" "}
          <br />
          <Form.Label className="mb-3 radioOption">
            Kindly make sure the details provided are correct for us to generate
            the invoice where required.
          </Form.Label>
          <Form.Control
            className="inputField border-0"
            type="text"
            as="textarea"
            rows={6}
            placeholder="Enter your answer"
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PaymentForm;
