import "../ListExpenses/ListExpenses.css"
import Expenses from "../Expenses/Expenses"

function ListExpenses ({ expenses }) {


    return(
        
        <div>
            {expenses.map((expense) => (
                <Expenses key={expense.id} expenses={expense}></Expenses>
            )) }
            
        </div>
    )
    
}

export default ListExpenses;