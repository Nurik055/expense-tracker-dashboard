import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";
import Cards from "../../components/Cards/Cards";
import Filtering from "../../components/Filtering/Filtering";
import { useState } from "react";
import {Link} from "react-router-dom"

function Home({expenses}) {
  

  return (
    <div>
      <Link to="/add-expense-filtering" >
      <button>Add Expense</button>
      </Link>
      <Cards expenses={expenses}></Cards>
      
      <ListExpenses expenses={expenses}></ListExpenses>
    </div>
  );
}

export default Home;
