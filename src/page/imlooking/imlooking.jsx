import React from "react";
import "./imlooking.css";

const ImLooking = () => {
  return (
    <div>
      <div className="imlooking-text">
        We pride ourselves on being innovative, passionate and committed to
        understanding the needs of our customers and by working closely with
        both employers and employees, we are able to cultivate relationships
        that are both open and professional.</div>

      <div className="imlooking-texttwo">
        We are the only labour provider to offer a comprehensive selection,
        recruitment and support service that is fully managed from Europe to
        the UK. This means we are able to supply quality seasonal labour to
        the UK agriculture industry by having control over the supply chain
        of labour, allowing us to better manage quality and cost.
      </div>

      <form className="register">
        <div className="form__input">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="form__input ">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" />
        </div>
        <div className="form__input ">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>
        <div className="form__input ">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>
        <div className="form__input ">
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" id="phoneNumber" />
        </div>
      </form>
    </div>);
};

export default ImLooking;
