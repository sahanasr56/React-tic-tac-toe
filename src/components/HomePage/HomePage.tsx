import React, { useState } from "react";
import "./styles.css";
import { Box } from "../Boxes/Box";
import { isDisabled } from "@testing-library/user-event/dist/utils";

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
                <Box value={state[0]} onClick={()=>handleOnClick(0)} isDisabled={state[0]!=null?true:false}/>
                <Box value={state[1]} onClick={()=>handleOnClick(1)} isDisabled={state[1]!=null?true:false}/>
                <Box value={state[2]} onClick={()=>handleOnClick(2)} isDisabled={state[2]!=null?true:false}/>
                <Box value={state[3]} onClick={()=>handleOnClick(3)} isDisabled={state[3]!=null?true:false}/>
                <Box value={state[4]} onClick={()=>handleOnClick(4)} isDisabled={state[4]!=null?true:false}/>
                <Box value={state[5]} onClick={()=>handleOnClick(5)} isDisabled={state[5]!=null?true:false}/>
                <Box value={state[6]} onClick={()=>handleOnClick(6)} isDisabled={state[6]!=null?true:false}/>
                <Box value={state[7]} onClick={()=>handleOnClick(7)} isDisabled={state[7]!=null?true:false}/>
                <Box value={state[8]} onClick={()=>handleOnClick(8)} isDisabled={state[8]!=null?true:false}/>
            </div>
        </div>
        </>
    )
}