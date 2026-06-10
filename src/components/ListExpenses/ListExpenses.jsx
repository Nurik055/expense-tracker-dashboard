import "../ListExpenses/ListExpenses.css"
import Expenses from "../Expenses/Expenses"

function ListExpenses ({ fakeData }) {


    return(
        
        <div>
            {fakeData.map((fakeD) => (
                <Expenses key={fakeD.id} fakeData={fakeD}></Expenses>
            )) }
            
        </div>
    )
    
}

export default ListExpenses;