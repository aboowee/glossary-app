import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

var Creation = () => {

  const { useState } = React;

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [name, setName] = useState('');

  const signup = () => {
      axios.post('/signup', {
        email: email,
        password: password,
        name: name
      })
      .then((data) => {
        window.location = '/shipping'
      })
      .catch((error) => {
        console.log('Can not sign up: ', error);
      })
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <label htmlFor="email">Insert Email Address: </label>
      <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
      <label htmlFor="fullName">Full Name: </label>
      <input type="text" name="fullName" onChange={(e)=>{setName(e.target.value)}}></input>
      <label htmlFor="password">Insert Password: </label>
      <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button onClick={signup}>Next</button>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </div>
  );

}

export default Creation;