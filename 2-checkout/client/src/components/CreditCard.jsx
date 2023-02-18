import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

var CreditCard = () => {

  const { useState } = React;

  let [creditCard, setCredit] = useState(0);
  let [cvc, setCVC] = useState(0);
  let [expiration, setExpiration] = useState('');
  let [billZip, setBillZip] = useState(0);


  const payment = () => {
    axios.post('/payment', {
    creditCard: creditCard,
    cvc: cvc,
    expiration: expiration,
    billZip: billZip
  })
  .then((data) => {
    window.location = '/summary'
  })
  .catch((error) => {
    console.log('Can not pay: ', error);
  })
}

  return (
    <div>
      <label htmlFor="creditCard">Credit Card: </label>
      <input type="text" name="creditCard" onChange={(e)=>{setCredit(e.target.value)}}></input>
      <label htmlFor="expiration">Expiration Date (mm/yy): </label>
      <input type="text" name="expiration" onChange={(e)=>{setExpiration(e.target.value)}}></input>
      <label htmlFor="cvc">Security Code: </label>
      <input type="text" name="cvc" onChange={(e)=>{setCVC(e.target.value)}}></input>
      <label htmlFor="zipCode">Billing Zip Code: </label>
      <input type="text" name="zipCode" onChange={(e)=>{setBillZip(e.target.value)}}></input>
      <button onClick={payment}>Next</button>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </div>
  );

}

export default CreditCard;