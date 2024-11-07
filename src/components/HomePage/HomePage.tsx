import React, { useState } from "react";
import "./styles.css";
import { Box } from "../Boxes/Box";

export const HomePage: React.FC=()=>{
    const boxes=document.querySelectorAll(".box");

    const [state, setState]=useState(Array(9).fill(null));

    return(
        <>
        <h2>Tic Tac Toe</h2>
        <div className="container">
            <div className="wrapper">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
        </div>
        </>
    )
}