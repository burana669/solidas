import React, {useContext, useEffect} from "react"
import {CarContext, DistanceContext} from "../context/context"


export const VehicleDistance = () => {
    const [consumption, setConsumption] = useContext(CarContext)
    const [distance, setDistance] = useContext(DistanceContext)

const HandleClick = (props) => {
    
    
        setConsumption(props)
        

    
}

    return (

            
        <div>        
            <button onClick={() => HandleClick(3)}>Auto 1</button>
            <button onClick={() => HandleClick(4)} >Auto 2</button>
            <button onClick={() => HandleClick(5)}>Auto 3</button>
            <div> Matka: </div> <input placeholder = "100" onChange= {(e)=> setDistance(e.target.value)}></input>
        </div> 
            
    
    )
}