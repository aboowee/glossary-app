import React from "react";
import ReactDOM from "react-dom";
import Creation from "./components/Creation.jsx";
import CreditCard from "./components/CreditCard.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import SummaryPage from "./components/SummaryPage.jsx";


class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
    <div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        <button>Checkout</button>
        <Creation />
        <PersonalInfo />
        <CreditCard />
      </p>
    </div>)

}
}

ReactDOM.render(<App />, document.getElementById('root'));