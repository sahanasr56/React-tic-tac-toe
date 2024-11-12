import React from "react";
import "./styles.css";

interface BoxProps{
value:string
onClick:()=>void
isDisabled:boolean
}

export const Box: React.FC<BoxProps>=(props)=>{
    return(
        <button className="box" onClick={props.onClick} disabled={props.isDisabled}>{props.value}</button>
    )
}