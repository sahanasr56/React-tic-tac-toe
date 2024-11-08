import React from "react";
import "./styles.css";

interface BoxProps{
value:string
onClick:()=>void
}

export const Box: React.FC<BoxProps>=(props)=>{
    return(
        <div className="box" onClick={props.onClick}>{props.value}</div>
    )
}