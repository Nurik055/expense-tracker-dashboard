import "../ListExpenses/ListExpenses.css"
import Expenses from "../Expenses/Expenses"

function ListExpenses ({ fakeDatas }) {


    return(
        
        <div>
            {fakeDatas.map((fakeD) => (
                <Expenses key={fakeD.id} fakeData={fakeD}></Expenses>
            )) }
            
        </div>
    )
    
}

export default ListExpenses;