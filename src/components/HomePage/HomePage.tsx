import React from "react";
import "./styles.css"

export const HomePage: React.FC=()=>{
    return(
        <>
        <h2>Tic Tac Toe</h2>
        <div className="container">
            <div className="wrapper">
                <div className="box">0</div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
        </>
    )
}