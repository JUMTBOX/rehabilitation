import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const filterChangeHandler = (selectedYear) => {
    console.log("In Expenses.js", selectedYear);
    console.log("김세운 바보");
  };

  return (
    <div>
      <ExpensesFilter onChangedFilter={filterChangeHandler} />
      <Card className="expenses">
        {expenses.map((item, index) => {
          return (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
