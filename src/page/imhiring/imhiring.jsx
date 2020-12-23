import React from "react";
import "./imhiring.css";

const ImHiring = () => {
  return (
    <div>
      <div className="imlooking-text">
        Working in the UK can be a rewarding and fulfilling experience,
        AG Recruitment aims to provide work opportunities for people who
        are willing to work hard and appreciate the challenges of working
        on farms. This ensures their experience of working in the UK, is
         both fruitful and prosperous.</div>

      <div className="imlooking-texttwo">If you have realistic expectations
      and are prepared for the work opportunities that are available, click
      the link below or contact one of our team today.</div>


      <form className="register">
        <div className="form__input">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="form__input">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" />
        </div>
        <div className="form__input">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>
        <div className="form__input">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>
        <div className="form__input">
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" id="phoneNumber" />
        </div>
      </form>
    </div>
  );
};

export default ImHiring;
