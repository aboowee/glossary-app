import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

var SummaryPage = (props) => {

  const {useState, useEffect} = React;

  const [summary, setSummary] = useState({})

  useEffect(() => {
    fetch('/data')
    .then(data => (
      data.json()
    ))
    .then((data) => {
      setSummary(data)
    })
  })

  const purchase = () => {
    axios.post('/summary')
    .then((data) => {
      window.location = '/'
    })
}

  return (
    <div>
      <h1>Confirmation Page</h1>
      <div>Name: {summary.name}</div>
      <div>Email: {summary.email}</div>
      <div>Shipping Address: {summary.address1} {summary.address2}</div>
      <div>City, State, Zip Code: {summary.city}, {summary.state}, {summary.shipZip}</div>
      <div>Credit Card: {summary.creditCard}</div>
      <div>Expiration Date: {summary.expiration}</div>
      <div>Billing Zip Code: {summary.billZip}</div>
      <button onClick={purchase}>Purchase</button>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </div>
  );

}

export default SummaryPage;