import React, {useState, useContext} from "react"
import {CarContext, DistanceContext} from "../context/context"
import {Datadisplay} from "./Datadisplay"


export const Speedselect = () => {

    const [speed1, setSpeed1] = useState(1)
    const [speed2, setSpeed2] = useState(1)

    const [consumption] = useContext(CarContext)
    const [distance] = useContext(DistanceContext)

    const handleinput1 = (value) =>
    setSpeed1(value)

    const handleinput2 = (value) =>
    setSpeed2(value)

    return (<div>
       <div>nopeus 1</div> <input type="range" min="1" max="300" onChange ={(e) => handleinput1(e.target.value)}></input><Datadisplay speed={speed1} consumption ={consumption} distance = {distance}/>
       <div>nopeus 2</div> <input type="range" min="1" max="300" onChange ={(e) => handleinput2(e.target.value)}></input><Datadisplay speed={speed2} consumption ={consumption} distance = {distance}/>
    </div>)
}