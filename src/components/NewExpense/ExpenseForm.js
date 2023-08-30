import "./ExpenseForm.css";
import { useState } from "react";
export default function ExpenseForm(props) {
  const [iniTitle, enteredTitle] = useState("");
  const [iniDate, enteredDate] = useState("");
  const [iniAmount, enteredAmount] = useState("");

  function getHandler(identifier, value) {
    if (identifier === "title") enteredTitle(value);
    else if (identifier === "date") enteredDate(value);
    else enteredAmount(value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const values = {
      title: iniTitle,
      date: new Date(iniDate),
      amount: +iniAmount
    };
    props.onSubmitExpenseData(values);
    enteredTitle("");
    enteredDate("");
    enteredAmount("");
  }
  function closeHandler() {
    props.onCloseExpenseData(false);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={iniTitle}
            onChange={(event) => getHandler("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={iniAmount}
            min="0.01"
            step="0.01"
            onChange={(event) => getHandler("amount", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={iniDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={(event) => getHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeHandler}>Close</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
