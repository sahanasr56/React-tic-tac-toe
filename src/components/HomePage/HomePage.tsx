import React, { useState } from "react";
import "./styles.css";
import { Box } from "../Boxes/Box";

export const HomePage: React.FC=()=>{

    const [state, setState]=useState(Array(9).fill(null));
    const [currentTurn, setCurrentTurn]=useState("X");
    const [win, setWin]=useState(false);
    const [draw, setDraw]=useState(false);
    const [count, setCount]=useState(1);
    const [value, setValue]=useState("");
    let isWin=false;
    const handleOnClick=(index:number)=>{
        const stateCopy=Array.from(state);
        stateCopy[index]=currentTurn;
        console.log(stateCopy)
        setCurrentTurn(currentTurn==="X"?"O":"X")
        setState(stateCopy);
        checkResult(stateCopy);
    }

    let winList=[[0,4,8],[0,1,2],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
    const checkResult=(arr:Array<string|null>)=>{
        setCount(count+1)
        for(let i=0;i<winList.length;i++){
            let pos1=arr[winList[i][0]]
            let pos2=arr[winList[i][1]]
            let pos3=arr[winList[i][2]]

            if(pos1!=null && pos2!=null && pos3!=null){
                if (pos1===pos2 && pos2===pos3){
                    isWin=true
                    setValue(pos1)
                    setWin(true);
                }
            }
        }
        setDraw(count===9 && !isWin?true:false)
    }

    return(
        <>
        <h2>Tic Tac Toe</h2>
                {win && <h3>"{value}" Won!!</h3>}
                {draw && <h3>Game Draw</h3>}
        <div className="container">
            <div className="wrapper">
                <Box value={state[0]} onClick={()=>handleOnClick(0)} isDisabled={state[0]!=null || win ?true:false}/>
                <Box value={state[1]} onClick={()=>handleOnClick(1)} isDisabled={state[1]!=null || win ?true:false}/>
                <Box value={state[2]} onClick={()=>handleOnClick(2)} isDisabled={state[2]!=null || win ?true:false}/>
                <Box value={state[3]} onClick={()=>handleOnClick(3)} isDisabled={state[3]!=null || win ?true:false}/>
                <Box value={state[4]} onClick={()=>handleOnClick(4)} isDisabled={state[4]!=null || win ?true:false}/>
                <Box value={state[5]} onClick={()=>handleOnClick(5)} isDisabled={state[5]!=null || win ?true:false}/>
                <Box value={state[6]} onClick={()=>handleOnClick(6)} isDisabled={state[6]!=null || win ?true:false}/>
                <Box value={state[7]} onClick={()=>handleOnClick(7)} isDisabled={state[7]!=null || win ?true:false}/>
                <Box value={state[8]} onClick={()=>handleOnClick(8)} isDisabled={state[8]!=null || win ?true:false}/>
            </div>
        </div>
        </>
    )
}