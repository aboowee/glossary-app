import React from "react";
import ReactDOM from "react-dom";
import Creation from "./components/Creation.jsx";
import CreditCard from "./components/CreditCard.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import SummaryPage from "./components/SummaryPage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      password: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      shipZip: null,
      creditCard: null,
      expiration: null,
      cvc: null,
      billZip: null
    }
  }

  checkout() {
    axios.post('/checkout')
    .then((data) => {
      console.log(data);
      window.location = '/signup'
    })
    .catch((error) => {
      window.location = '/summary'
    })
  }


  render(){
    return(
      <div>
        {/* <SummaryPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div>
              <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
              <button onClick={()=>this.checkout()}>Checkout</button>
            </div>} />
            <Route path='/signup' element={<Creation />} />
            <Route path='/shipping' element={<PersonalInfo />} />
            <Route path='/payment' element={<CreditCard />} />
            <Route path='/summary' element={<SummaryPage data={this.state}/>} />
        </Routes>
      </BrowserRouter>
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('root'));