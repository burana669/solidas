import React from "react"
import {ComparisonStyle} from "../styled/styled"

export const Comparison = (props) => {
    
    const timeDifference = (props.distance/props.speed1) - (props.distance/props.speed2)
    const minutes = (((timeDifference)* 60) % 60).toFixed(0)
    const hours = Math.floor(Math.abs(timeDifference))

    const consumption1 = props.consumption * Math.pow(1.009, props.speed1-1)
    const consumption2 = props.consumption * Math.pow(1.009, props.speed2-1)
    const fuelDifference = ((consumption1*(props.distance/100)) - (consumption2*(props.distance/100))).toFixed(2)


    
    if(props.comparing){
    return (<ComparisonStyle>
        <div>{timeDifference <=0 ? "säästät aikaa" : "menetät aikaa"} {hours} tuntia {Math.abs(minutes)} minuuttia</div>
        <div>Polttoaineenkulutus: {Math.abs(fuelDifference)} {fuelDifference <=0 ? "vähemmän" : "enemmän"}</div>

    </ComparisonStyle>)
    } else return <div></div>
}