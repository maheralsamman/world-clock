import React, { useContext } from "react";
import Clock from "./Clock";

import { LocationContext } from '../App';

const Board = () => {
    const locations = useContext(LocationContext)
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