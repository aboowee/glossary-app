import React from "react";
import { render } from "react-dom";

var PersonalInfo = () => {

  return (
    <div>
      <label htmlFor="shipping">Address Line 1: </label>
      <input type="text" name="shipping"></input>
      <label htmlFor="shippingOp">Address Line 2 (Optional): </label>
      <input type="text" name="shippingOp"></input>
      <label htmlFor="city">City: </label>
      <input type="text" name="city"></input>
      <label htmlFor="state">State: </label>
      <input type="text" name="state"></input>
      <label htmlFor="shipZip">Shipping Zip Code: </label>
      <input type="text" name="shipZip"></input>
      <label htmlFor="phone">Phone Number: </label>
      <input type="text" name="phone"></input>
      <button>Next</button>
    </div>
  );

}

export default PersonalInfo;