import "../Filtering/Filtering.css";
import { useState } from "react";
function Filtering({
  expenses,
  userInput,
  setUserInput,
  expenseEqual,
  today,
  currentMonth,
  setExpenses,
  select,
  setSelect,
  categoryFilter,
  setCategoryFilter,
}) {
  return (
    <div className="filterContainer">
      <div className="searchContainer">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
      </div>
      <div className="monthFiltering">
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="allTime">All Time</option>
          <option value="thisMonth">This Month</option>
        </select>
      </div>
      <div className="filteringCategory">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
            <option value="all">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
}

export default Filtering;
