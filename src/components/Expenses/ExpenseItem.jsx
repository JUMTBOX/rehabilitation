import { useState, useRef } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const inputRef = useRef();

  const clickHandler = () => {
    setTitle((cur) => inputRef.current.value);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
