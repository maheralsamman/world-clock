import React from "react";
import Clock from "./Clock";

const Board = ({ locations }) => {
    return (
        <div className="board">
            {locations.map(({ name, timezone }) => 
            <Clock name={name} 
            timezone={timezone} 
            key={name}/>)}
        </div>
    )
}

export default Board;