import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((item, index) => {
        return (
          <Card>
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          </Card>
        );
      })}
    </div>
  );
}
