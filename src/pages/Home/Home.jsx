import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";
import Cards from "../../components/Cards/Cards"
import Filtering from "../../components/Filtering/Filtering"

function Home() {
  const fakeDatas = [
    {
      id: 1,
      name: "Coffee",
      amount: 20,
      month: 3
    },
    {
      id: 2,
      name: "Car Washing",
      amount: 10,
      month: 3
    },
    {
      id: 3,
      name: "Grousery",
      amount: 56,
      month: 3
    },
    {
      id: 4,
      name: "Bills",
      amount: 198,
      month: 4
    },
  ];

  addExpense(fakeDatas) {
    <div>
        ....fakeDatas,
        [...fakeDatas, newExpense ]
    </div>
  }


  return (
    <div>
      <Cards fakeDatas={fakeDatas}></Cards>
      <Filtering></Filtering>
      <ListExpenses fakeDatas={fakeDatas}></ListExpenses>
    </div>
  );
};


export default Home;