import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const saveSubmittedExpenseData = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString()
    };
    props.onSubmitSavedData(expenseData);
  };

  const [formState, newFormState] = React.useState(false);
  let expenseForm;
  let btnState = <button onClick={addExpense}>Add New Expense</button>;
  function addExpense(params) {
    newFormState(true);
  }
  if (formState) {
    expenseForm = (
      <ExpenseForm
        onSubmitExpenseData={saveSubmittedExpenseData}
        onCloseExpenseData={closeExpenseForm}
      />
    );
    btnState = "";
  }
  function closeExpenseForm(bool) {
    newFormState(bool);
  }
  return (
    <div className="new-expense">
      {expenseForm}
      {btnState}
    </div>
  );
}
