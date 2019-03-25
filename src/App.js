import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cannes%2C_Le_Suquet%2C_France.jpg/320px-Cannes%2C_Le_Suquet%2C_France.jpg"
          destination="Cannes"
          country="France"
          distance="776 km"
        />
        <Travel
          photo="https://www.goodfreephotos.com/cache/italy/rome/side-of-the-roman-colosseum_200_cw200_ch200_thumb.jpg"
          destination="Rome"
          country="Italy"
          distance="1104 km"
        />
      </div>
    );
  }
}

export default App;