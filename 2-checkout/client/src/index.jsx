import React from "react";
import ReactDOM from "react-dom";
import Creation from "./components/Creation.jsx";
import CreditCard from "./components/CreditCard.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import SummaryPage from "./components/SummaryPage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        {/* <Creation /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div>
              <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
              <button>Checkout</button>
            </div>} />
            <Route path='/signup' element={<Creation />} />
            <Route path='/shipping' element={<PersonalInfo />} />
            <Route path='/payment' element={<CreditCard />} />
        </Routes>
      </BrowserRouter>
      </div>
    )

}
}

ReactDOM.render(<App />, document.getElementById('root'));