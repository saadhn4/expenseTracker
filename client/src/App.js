import React from "react";
import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "School Fee",
      amount: 150,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Book Fee",
      amount: 250,
      date: new Date(2022, 5, 12),
    },
    {
      id: "e3",
      title: "Exam Fee",
      amount: 170,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e4",
      title: "Bike Fee",
      amount: 110,
      date: new Date(2021, 5, 15),
    },
  ];

  return (
    <>
      <h2>Lets go</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </>
  );
}

export default App;
