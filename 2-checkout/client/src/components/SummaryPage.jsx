import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

var SummaryPage = (props) => {

  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Email: {props.email}</div>
      <div>Shipping Address: {props.address1} {props.address2}</div>
      <div>City, State, Zip Code: {props.city}, {props.state}, {props.shipZip}</div>
      <div>Credit Card: {props.credit}</div>
      <div>Expiration Date: {props.expiration}</div>
      <div>Billing Zip Code: {props.billZip}</div>
    </div>
  );

}

export default SummaryPage;