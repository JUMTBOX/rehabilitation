import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses, getDelItem }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filteredExpenses = expenses.filter(
    (el) => el.date.getFullYear() === filterYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilterYear((cur) => selectedYear);
  };

  const deleteHandler = (event) => {
    getDelItem(event);
  };

  return (
    <div>
      <ExpensesFilter
        selected={filterYear}
        onChangedFilter={filterChangeHandler}
      />
      <Card className="expenses">
        {expenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              delete={deleteHandler}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
