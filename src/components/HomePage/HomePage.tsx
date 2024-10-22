import React from "react";
import "./styles.css";

export const HomePage: React.FC=()=>{
    const boxes=document.querySelectorAll(".box");

    const clickHandler=()=>{
       
    }

    return(
        <>
        <h2>Tic Tac Toe</h2>
        <div className="container">
            <div className="wrapper">
                <button className="box" onClick={clickHandler}>0</button>
                <button className="box"></button>
                <button className="box"></button>
                <button className="box"></button>
                <button className="box"></button>
                <button className="box"></button>
                <button className="box"></button>
                <button className="box"></button>
                <button className="box"></button>
            </div>
        </div>
        </>
    )
}