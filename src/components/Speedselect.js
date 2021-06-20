import React, {useState, useContext} from "react"
import {CarContext, DistanceContext} from "../context/context"
import {Datadisplay} from "./Datadisplay"
import {Comparison} from "./Comparison"
import {Button, Slider, SpeedselectStyle, Flex2, Speed2Style} from "../styled/styled"

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
        setBackground(`linear-gradient(90deg, darkgrey ${percentage}%, white ${percentage}%)`)
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
        <Speed2Style>    
        <Datadisplay className = "speed2" speed={speed2} id = "speed2" consumption ={consumption} distance = {distance}/>
        <Button onClick={() => handleClick()}>Vapauta vertailu</Button>
        </Speed2Style>)
        }else return <Speed2Style></Speed2Style>
        
        }  

    return (
    <Flex2>
        <SpeedselectStyle>
       <div>{speedlocked ? "Vertaa":"Anna vertailunopeus"}</div> 
       <Slider type="range" min="1" max="300" onChange ={(e) => handleinput1(e.target.value)} onMouseUp = {(e) => handleBlur(e.target.value)} style={{ backgroundImage: background1 }}></Slider>
       <Datadisplay speed={speed1} speed2={speed2} id = "speed1" consumption ={consumption} distance = {distance}/>
       
       
       
       
       
        </SpeedselectStyle>
        <Speed2handler/>    
    <Comparison speed1={speed1} speed2={speed2} consumption={consumption} distance={distance} comparing = {speedlocked}/>
    </Flex2>)
}