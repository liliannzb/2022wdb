import "./ExpenItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  // const expenseDay = new Date(2022, 11, 1);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 200;
  const title = props.title;

  const [titles, setTitle] = useState(title);

  function clickHandle() {
    console.log("click");
    setTitle("Update title name!!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate datei={props.date} />
      <div className="expense-item__description">
        <h2>{titles}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={clickHandle}>change Title</button>
    </Card>
  );
}

export default ExpenseItem;
