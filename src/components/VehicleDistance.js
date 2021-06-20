import React, {useContext, useEffect} from "react"
import {CarContext, DistanceContext} from "../context/context"
import {Button, VehicleDistanceStyle, Flex1, DistanceInput, DistanceInputStyle} from "../styled/styled"


export const VehicleDistance = () => {
    const [consumption, setConsumption] = useContext(CarContext)
    const [distance, setDistance] = useContext(DistanceContext)

const HandleClick = (props) => {
    
    
        setConsumption(props)
        



    
}

    return (

        <Flex1>    
        <VehicleDistanceStyle>        
            <Button onClick={() => HandleClick(3)}>Auto 1</Button>
            <Button onClick={() => HandleClick(4)} >Auto 2</Button>
            <Button onClick={() => HandleClick(5)}>Auto 3</Button>
           <DistanceInputStyle><div> Matka: </div> <DistanceInput placeholder = "100" onChange= {(e)=> setDistance(e.target.value)}></DistanceInput></DistanceInputStyle>
        </VehicleDistanceStyle> 
        </Flex1>    
    
    )
}