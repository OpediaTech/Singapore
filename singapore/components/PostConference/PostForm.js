import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const PostForm = () => {
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
  
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Designation</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
                  placeholder="Enter your answer"
                />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Promo code</Form.Label>
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
  
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="fw-bold mb-3">Company</Form.Label>
                <Form.Control
                  className="inputField border-0"
                  type="text"
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

export default PostForm;