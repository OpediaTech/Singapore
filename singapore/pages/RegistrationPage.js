import React from "react";
import ReportTerms from "../components/Exhibitors/ReportTerms";
import PaymentForm from "../components/Payment/PaymentForm";
import Registrationbanner from "../components/Registration/Registrationbanner";
import RegistrationForm from "../components/Registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div>
      <Registrationbanner />
      <RegistrationForm />
      <ReportTerms />
      <PaymentForm />
    </div>
  );
};

export default RegistrationPage;
