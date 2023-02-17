import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

var CreditCard = () => {

  return (
    <div>
      <label htmlFor="creditCard">Credit Card: </label>
      <input type="text" name="creditCard"></input>
      <label htmlFor="expiration">Expiration Date (mm/yy): </label>
      <input type="text" name="expiration"></input>
      <label htmlFor="cvv">Security Code: </label>
      <input type="text" name="cvv"></input>
      <label htmlFor="zipCode">Billing Zip Code: </label>
      <input type="text" name="zipCode"></input>
      <button>Next</button>
    </div>
  );

}

export default CreditCard;