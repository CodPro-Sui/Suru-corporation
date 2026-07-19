import React from "react";
import "../style/Greeting.css";

const Greeting = ({reset,data}) => {

  const handleReload = () => {
    window.location.reload();
    reset();
  };

  return (
    <div className="greet-container">
      <div className="greet-card">
        <div className="success-icon">✓</div>

        <h1 className="company">Suru Corporation</h1>
        <p style={{textAlign: "center",color: "grey",fontWeight:"bold",letterSpacing:"0.3px"}}><i>{data?.name}</i></p>
        <h2 className="title">
          🎉 Your Application has been Submitted Successfully!
        </h2>

        <p className="description">
          Thank you for completing your application. Your information has been
          securely submitted to <strong>Suru Corporation</strong>.
        </p>

        <p className="description">
          Our recruitment team will carefully review your profile. If a suitable
          job opportunity matching your qualifications becomes available, we
          will contact you as soon as possible via phone, email, or WhatsApp.
        </p>

        <div className="thank-box">
          <h2>Thank You!</h2>
          <p>
            We appreciate your interest in Suru Corporation and wish you the
            very best for your career.
          </p>
        </div>

        <button className="reload-btn" onClick={handleReload}>
          Home
        </button>

      </div>
    </div>
  );
};

export default Greeting;