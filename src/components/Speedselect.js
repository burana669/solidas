import React, {useState, useContext} from "react"
import {CarContext, DistanceContext} from "../context/context"
import {Datadisplay} from "./Datadisplay"
import {Comparison} from "./Comparison"
import "./Speedselect.css"
import {Button} from "semantic-ui-react"

export const Speedselect = () => {

    const [background1, setBackground] = useState("white")
    const [speed1, setSpeed1] = useState(1)
    const [speed2, setSpeed2] = useState(0)
    const [speedlocked, setSpeedLocked] = useState(false)

    const [consumption] = useContext(CarContext)
    const [distance] = useContext(DistanceContext)

    const handleinput1 = (value) =>
    setSpeed1(value)

    const handleBlur = (value) => {
        const num = (value/300) * 100
        const percentage = num.toFixed()
        if(!speedlocked){
        setBackground(`linear-gradient(90deg, red ${percentage}%, white ${percentage}%)`)
        setSpeed2(value)
        setSpeedLocked(true)
        }
    }
    const handleClick = () => {
            setSpeedLocked(false) 
            setBackground(`linear-gradient(90deg, red 0%, white 0%)`)
            setSpeed2(0)
    }    

    const Speed2handler = () => {
        if(speed2 !== 0){
        return  (
        <Datadisplay className = "speed2" speed={speed2} id = "speed2" consumption ={consumption} distance = {distance}/>)
        }else return <div></div>
        
        }  

    return (<div>
       <div>{speedlocked ? "Vertaa":"Anna vertailunopeus"}</div> 
       <input className="slider" type="range" min="1" max="300" onChange ={(e) => handleinput1(e.target.value)} onMouseUp = {(e) => handleBlur(e.target.value)} style={{ backgroundImage: background1 }}></input>
       <Datadisplay speed={speed1} speed2={speed2} id = "speed1" consumption ={consumption} distance = {distance}/>
       <Button onClick={() => handleClick()}>Vapauta vertailu</Button>
       <Speed2handler/>
       <Comparison speed1={speed1} speed2={speed2} consumption={consumption} distance={distance} comparing = {speedlocked}/>
       
       
    </div>)
}