import ExpenseItem from "./components/ExpenseItem";
import "./components/expense.css";
import Card from "./components/Card";
import NewExpense from "./components/newExpense/newExpense";
import ExpensesFilter from "./components/newExpense/expenseFilter"
import { useState } from "react";

 const dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];
function App() {
 const [expenses, setExpenses] =useState(dummy_expenses)

  function addExpenseHandler(expense) {
    setExpenses((prevExpense)=>{
      return [expense, ...prevExpense]
    })
  }
 
    
  return (
    
    
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Card className="expenses">
      <ExpensesFilter/>
      {expenses.length === 0 ? <p>No expense item</p> :  (expenses.map((el) => (
          <ExpenseItem
            key={el.id}
            id={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        )))}
       
      </Card>
    </div>
  );
}

export default App;
