import "../ListExpenses/ListExpenses.css"
import Expenses from "../Expenses/Expenses"

function ListExpenses ({ expenses }) {


    return(
        
        <div>
            {expenses.map((expense) => (
                <Expenses key={expense.id} expense={expense}></Expenses>
            )) }
            
        </div>
    )
    
}

export default ListExpenses;