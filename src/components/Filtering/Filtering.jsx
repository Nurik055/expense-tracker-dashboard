import "../Filtering/Filtering.css"
import { useState } from "react";
function Filtering({expenses, userInput, setUserInput, expenseEqual}) {
    
    
    return(
        <div className="filterContainer">
            <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}></input>
        </div>
    )
}

export default Filtering;