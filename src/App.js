import {VehicleDistance} from "./components/VehicleDistance"
import {Speedselect} from "./components/Speedselect"

import {CarContextProvider, DistanceContextProvider} from "./context/context"
import React from "react"
import {MainContainer} from "./styled/styled"

const App = () => {
  return (
    <MainContainer>
      <DistanceContextProvider>
      <CarContextProvider>
        <VehicleDistance/>
        
        <Speedselect/>
      </CarContextProvider>
      </DistanceContextProvider>
    </MainContainer>
  );
}

export default App;
