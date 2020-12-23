import React from "react";
import "./imhiring.css";

const ImHiring = () => {
  return (
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
  );
};

export default ImHiring;
