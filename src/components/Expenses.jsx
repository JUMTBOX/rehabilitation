import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  return (
    <div className="expenses">
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
    </div>
  );
}
