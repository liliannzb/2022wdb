import React, { useState } from "react";
import "./expenseForm.css";

function Form(props) {
  //   const [enterTitle, setEnterTitle] = useState("");
  //   const [enterAmount, setEnterAmount] = useState("");
  //   const [enterDate, setEnterDate] = useState("");

  const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: ""
  });

  function titleChangeHandle(event) {
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value
    // });
    setUserInput((prevValue) => {
      return { ...prevValue, enterTitle: event.target.value };
    });
  }

  function amountChangeHandle(event) {
    setUserInput({
      ...userInput,
      enterAmount: event.target.value
    });
  }
  function dateChangeHandle(event) {
    setUserInput({
      ...userInput,
      enterDate: event.target.value
    });
  }

  function submitHandle(e) {
    e.preventDefault();
    const expenseData = {
      title: userInput.enterTitle,
      amount: userInput.enterAmount,
      date: new Date(userInput.enterDate)
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
  }

  return (
    <form onSubmit={submitHandle}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandle}
            value={userInput.enterTitle}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandle}
            value={userInput.enterAmount}
          />
        </div>
        <div className="new-expense__controls">
          <label>Data</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandle}
            value={userInput.enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default Form;
