import React from "react"

export const Datadisplay = (props) => {
    return (<div>
    <div>kulutus/100km {props.consumption * Math.pow(1.009, props.speed-1)}</div>
    <div>kulutus(l) {(props.distance/100) *(props.consumption * Math.pow(1.009, props.speed-1))} </div>
    <div>nopeus(km/h) {props.speed}</div>
    <div>matka-aika(h) {props.distance/(props.speed)}</div>
    <div>matka(km) {props.distance}</div>

    </div>)
}