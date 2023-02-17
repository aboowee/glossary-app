import React from "react";
import { render } from "react-dom";

var PersonalInfo = () => {

  return (
    <div>
      <label for="shipping">Address Line 1: </label>
      <input type="text" name="shipping"></input>
      <label for="shippingOp">Address Line 2 (Optional): </label>
      <input type="text" name="shippingOp"></input>
      <label for="city">City: </label>
      <input type="text" name="city"></input>
      <label for="state">State: </label>
      <input type="text" name="state"></input>
      <label for="shipZip">Shipping Zip Code: </label>
      <input type="text" name="shipZip"></input>
      <label for="phone">Phone Number: </label>
      <input type="text" name="phone"></input>
      <button>Next</button>
    </div>
  );

}

export default PersonalInfo;