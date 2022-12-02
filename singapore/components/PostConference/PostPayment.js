import React from 'react';
import { Container, Form } from 'react-bootstrap';

const PostPayment = () => {
    const paragraph = [
        {
            para:"Regular Price: $481.50 (inclusive of GST)"
        },
        {
            para:"Conference delegate promo: $385.20 (inclusive of GST)"
        },
        {
            para:"Kindly ensure all the details you have provided is accurate as it will be reflected in the invoice."
        },
    ]
    const options = [
        {
          label: "Credit / Debit card",
          name: "option1",
        },
        {
          label: "Pay now / Bank transfer",
          name: "option2",
        },
      ];
    return (
        <Container>
            <h2 className='accomodation_bluetitle mb-3'>Payment</h2>
            <div>
                {
                    paragraph.map((p,index)=><p key={index}
                    className="radioOption">
                        {p.para}
                    </p>)
                }
            </div>
            <div className="mb-5">
          <p className="fw-bold">Select your payment method</p>
          <div className='d-flex'>
          {options.map((option, index) => (
            <div key={index} className="d-flex mb-3 me-4">
              <Form.Check
                className="radioOption"
                label={option.label}
                name={option.name}
                type="radio"
              />
            </div>
          ))}
          </div>
         
        </div>
        </Container>
    );
};

export default PostPayment;