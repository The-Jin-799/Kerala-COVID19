import React from "react";
import Heading from "./components/Header";
import StateCard from "./components/cards";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Heading />
      <div id="section2">
        <StateCard />
      </div>
    </React.Fragment>
  );
}

export default App;
