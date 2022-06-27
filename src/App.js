import React from "react";
import Board from "./components/Board";

import './App.css'

function App() {
  const locations = [
    {
      name: "London",
      timezone: -1
    },
    {
      name: "Stockholm",
      timezone: 0
    },
    {
      name: "Paris",
      timezone: 0
    },
    {
      name: "Moscow",
      timezone: 2
    },
    {
      name: "Tokyo",
      timezone: 8
    },
    {
      name: "New York",
      timezone: 7
    },
    {
      name: "Los Angeles",
      timezone: 4
    },
    {
      name: "Sao Paolo",
      timezone: 8
    },
  ]
  return (
    <div className="App">
      <h1 className="title">World Clocks</h1>
      <Board locations={locations}/>
    </div>
  );
}

export default App;
