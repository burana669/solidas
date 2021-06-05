import {VehicleDistance} from "./components/VehicleDistance"
import {Speedselect} from "./components/Speedselect"
import {Datadisplay} from "./components/Datadisplay"
import {CarContextProvider, DistanceContextProvider} from "./context/context"
import React from "react"
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <div>
      <DistanceContextProvider>
      <CarContextProvider>
        <VehicleDistance/>
        <Speedselect/>
      </CarContextProvider>
      </DistanceContextProvider>
    </div>
  );
}

export default App;
