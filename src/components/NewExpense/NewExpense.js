import React, { useState, useRef } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const inputRef = useRef();

  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
