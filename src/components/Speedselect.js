import React, {useState} from "react"
import {Datadisplay} from "./Datadisplay"


export const Speedselect = () => {

    const [speed1, setSpeed1] = useState(1)
    const [speed2, setSpeed2] = useState(1)

    const tempconsumption = 3/100
    const tempdistance = 100

    const handleinput1 = (value) =>
    setSpeed1(value)

    const handleinput2 = (value) =>
    setSpeed2(value)

    return (<div>
       <div>nopeus 1</div> <input type="range" min="1" max="300" onChange ={(e) => handleinput1(e.target.value)}></input><Datadisplay speed={speed1} consumption ={tempconsumption} distance = {tempdistance}/>
       <div>nopeus 2</div> <input type="range" min="1" max="300" onChange ={(e) => handleinput2(e.target.value)}></input><Datadisplay speed={speed2} consumption ={tempconsumption} distance = {tempdistance}/>
    </div>)
}