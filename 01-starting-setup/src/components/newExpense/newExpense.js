import React from "react";
import "./newExpense.css";
import Form from "./expenseForm";

function newExpense(props) {
  function onSaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense ">
      <Form onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default newExpense;
