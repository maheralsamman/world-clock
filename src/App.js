import React, { createContext } from "react";
import Home from "./components/Home";

import './App.css'

// create context here or in another file

export const LocationContext = createContext();

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
      <LocationContext.Provider value={locations}>
        <Home />
      </LocationContext.Provider>
    </div>
  );
}

export default App;
