import React, {useState, createContext} from "react"

export const CarContext = createContext()
export const DistanceContext = createContext()

export const CarContextProvider = props => {
    const [consumption, setConsumption] = useState(3)

    return (
        <CarContext.Provider value ={[consumption, setConsumption]}>
            {props.children}
        </CarContext.Provider>
    )
}

export const DistanceContextProvider = props => {
    const [distance, setDistance] = useState(100)

    return (
        <DistanceContext.Provider value ={[distance, setDistance]}>
            {props.children}
        </DistanceContext.Provider>
    )
}
