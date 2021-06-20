import React from "react"
import {} from "../styled/styled"


export const Datadisplay = (props) => {

    const minutes = (((props.distance/props.speed)* 60) % 60).toFixed(0)
    const hours = Math.floor(((props.distance/props.speed)* 60) / 60)

    if (!props.comparing || props.id === "speed2"){ 
    return (<div>
    <div>kulutus/100km {(props.consumption * Math.pow(1.009, props.speed-1)).toFixed(2)}</div>
    <div>kulutus(l) {((props.distance/100) *(props.consumption * Math.pow(1.009, props.speed-1))).toFixed(2)} </div>
    <div>nopeus(km/h) {props.speed}</div>
    <div>matka-aika: {hours} tuntia {minutes} minuuttia </div>
    <div>matka(km) {props.distance}</div>

    </div>)
    }
    else return <div></div>
    
}