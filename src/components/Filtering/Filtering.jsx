import "../Filtering/Filtering.css"
import { useState } from "react";
function Filtering({expenses, userInput, setUserInput, expenseEqual, today, currentMonth, setExpenses, select, setSelect}) {

    
    
    return(
        <div className="filterContainer">
            <div className="searchContainer">
                <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}></input>
            </div>
            <div className="monthFiltering">
                <select value={select} onChange={(e)=>setSelect(e.target.value)}>
                    <option value="allTime">All Time</option>
                    <option value="thisMonth">This Month</option>
                </select>
            </div>
            
        </div>
    )
}

export default Filtering;