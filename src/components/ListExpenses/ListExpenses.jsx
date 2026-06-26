import "../ListExpenses/ListExpenses.css"
import Expenses from "../Expenses/Expenses"

function ListExpenses ({ expenses, setExpenses, expenseEqual }) {


    
    return(
        
        <div>
            {expenses.map((expense) => (
            <Expenses key={expense.id} expense={expense} setExpenses={setExpenses}></Expenses>
            )) }
            
        </div>
    )
    
}

export default ListExpenses;