import {VehicleDistance} from "./components/VehicleDistance"
import {Speedselect} from "./components/Speedselect"
import {Datadisplay} from "./components/Datadisplay"
import React from "react"
import './App.css';

const App = () => {
  return (
    <div>
      <VehicleDistance/>
      <Speedselect/>
    </div>
  );
}

export default App;
