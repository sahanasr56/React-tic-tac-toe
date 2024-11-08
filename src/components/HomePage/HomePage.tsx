import React, { useState } from "react";
import "./styles.css";
import { Box } from "../Boxes/Box";

export const HomePage: React.FC=()=>{

    const [state, setState]=useState(Array(9).fill(null));
    const [currentTurn, setCurrentTurn]=useState("X");
    const handleOnClick=(index:number)=>{
        const stateCopy=Array.from(state);
        stateCopy[index]=currentTurn;
        console.log(stateCopy)
        setCurrentTurn(currentTurn==="X"?"O":"X")
        setState(stateCopy);
    }

    return(
        <>
        <h2>Tic Tac Toe</h2>
        <div className="container">
            <div className="wrapper">
                <Box value={state[0]} onClick={()=>handleOnClick(0)}/>
                <Box value={state[1]} onClick={()=>handleOnClick(1)}/>
                <Box value={state[2]} onClick={()=>handleOnClick(2)}/>
                <Box value={state[3]} onClick={()=>handleOnClick(3)}/>
                <Box value={state[4]} onClick={()=>handleOnClick(4)}/>
                <Box value={state[5]} onClick={()=>handleOnClick(5)}/>
                <Box value={state[6]} onClick={()=>handleOnClick(6)}/>
                <Box value={state[7]} onClick={()=>handleOnClick(7)}/>
                <Box value={state[8]} onClick={()=>handleOnClick(8)}/>
            </div>
        </div>
        </>
    )
}