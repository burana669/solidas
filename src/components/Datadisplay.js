import React from "react"

export const Datadisplay = (props) => {
    return (<div>
    <div>kulutus(l/100km) {props.distance *(props.consumption * Math.pow(1.009, props.speed-1))} </div>
    <div>nopeus(km/h) {props.speed}</div>
    <div>matka-aika(h){props.distance/(props.speed)}</div>
    <div>matka {props.distance}</div>

    </div>)
}