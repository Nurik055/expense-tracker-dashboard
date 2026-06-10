import "../Home/Home.css";
import ListExpenses from "../../components/ListExpenses/ListExpenses";

function Home() {
  const fakeData = [
    {
      id: 1,
      name: "Coffee",
      amount: 20,
    },
    {
      id: 2,
      name: "Car Washing",
      amount: 10,
    },
    {
      id: 3,
      name: "Grousery",
      amount: 56,
    },
    {
      id: 4,
      name: "Bills",
      amount: 198,
    },
  ];



  return (
    <div>
      
      <ListExpenses fakeData={fakeData}></ListExpenses>
    </div>
  );
};


export default Home;