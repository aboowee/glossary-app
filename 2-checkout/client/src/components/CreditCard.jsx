import React from "react";
import { render } from "react-dom";

var CreditCard = () => {

  return (
    <div>
      <label for="creditCard">Credit Card: </label>
      <input type="text" name="creditCard"></input>
      <label for="expiration">Expiration Date (mm/yy): </label>
      <input type="text" name="expiration"></input>
      <label for="cvv">Security Code: </label>
      <input type="text" name="cvv"></input>
      <label for="zipCode">Billing Zip Code: </label>
      <input type="text" name="zipCode"></input>
      <button>Next</button>
    </div>
  );

}

export default CreditCard;