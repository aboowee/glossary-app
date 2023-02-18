import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

var SummaryPage = (props) => {

  const purchase = () => {
    axios.post('/summary')
    .then((data) => {
      window.location = '/'
    })
}

  return (
    <div>
      <h1>TEST FOR NOW</h1>
      <div>Name: {props.data.name}</div>
      {/* <div>Email: {props.email}</div>
      <div>Shipping Address: {props.address1} {props.address2}</div>
      <div>City, State, Zip Code: {props.city}, {props.state}, {props.shipZip}</div>
      <div>Credit Card: {props.credit}</div>
      <div>Expiration Date: {props.expiration}</div>
      <div>Billing Zip Code: {props.billZip}</div> */}
      <button onClick={purchase}>Purchase</button>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </div>
  );

}

export default SummaryPage;