import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

var PersonalInfo = () => {

  const { useState } = React;

  let [address1, setAddress1] = useState('');
  let [address2, setAddress2] = useState('');
  let [city, setCity] = useState('');
  let [state, setState] = useState('');
  let [shipZip, setShipZip] = useState(0);
  let [phoneNumber, setPhoneNumber] = useState('')

  const shipping = () => {
      axios.post('/shipping', {
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        shipZip: shipZip,
        phoneNumber: phoneNumber
      })
      .then((data) => {
        window.location = '/payment'
      })
      .catch((error) => {
        console.log('Can not insert shipping: ', error);
      })
  }

  return (
    <div>
      <label htmlFor="shipping">Address Line 1: </label>
      <input type="text" name="shipping" onChange={(e)=>{setAddress1(e.target.value)}}></input>
      <label htmlFor="shippingOp">Address Line 2 (Optional): </label>
      <input type="text" name="shippingOp" onChange={(e)=>{setAddress2(e.target.value)}}></input>
      <label htmlFor="city">City: </label>
      <input type="text" name="city" onChange={(e)=>{setCity(e.target.value)}}></input>
      <label htmlFor="state">State: </label>
      <input type="text" name="state" onChange={(e)=>{setState(e.target.value)}}></input>
      <label htmlFor="shipZip">Shipping Zip Code: </label>
      <input type="text" name="shipZip" onChange={(e)=>{setShipZip(e.target.value)}}></input>
      <label htmlFor="phone">Phone Number: </label>
      <input type="text" name="phone" onChange={(e)=>{setPhoneNumber(e.target.value)}}></input>
      <button onClick={shipping}>Next</button>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </div>
  );

}

export default PersonalInfo;