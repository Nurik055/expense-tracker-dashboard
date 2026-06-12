import "../Cards/Cards.css";

function Cards({fakeDatas}) {
  
  {/* this month expenses */}
  
  const today = new Date();
  const currentMonth = today.getMonth();
  function filterMonth(fakeData) {
      return fakeData.month === currentMonth;
  }
  const result = fakeDatas.filter(filterMonth);
  
  {/* this month expenses */}

    
  

  
























  function expenses() {}

  function avgExpenses() {}

  function remainingBudget() {}

  return <div></div>;
}

export default Cards;
