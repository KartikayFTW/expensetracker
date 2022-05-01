import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated");
  // };
  // setTimeout(() => {
  //   const str = `timeout expired! ${title}`;
  //   setTitle(str);
  // }, 2000);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
