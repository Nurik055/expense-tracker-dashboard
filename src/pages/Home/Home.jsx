import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";
import Cards from "../../components/Cards/Cards"
import Filtering from "../../components/Filtering/Filtering"
import {useState} from 'react'

function Home() {
  
  const [expenses, setExpenses] = useState([]);
  
  const addExpense = (newExpense) => { 
    setExpenses(prev => [
      ...prev, 
      newExpense
    ]);
  }


  return (
    <div>
      <Cards expenses={expenses}></Cards>
      <Filtering addExpense={addExpense}></Filtering>
      <ListExpenses expenses={expenses}></ListExpenses>
    </div>
  );
};


export default Home;