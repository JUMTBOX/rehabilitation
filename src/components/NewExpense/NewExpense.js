import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddexpense }) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10000).toString(),
    };

    onAddexpense(expenseData);

    console.log("In NewExpense.js", expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
