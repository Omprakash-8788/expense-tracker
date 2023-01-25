import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addAmount, addExpense } from "../Redux/Actions";
import "./Form.css";

const Form = () => {
  const [value, setValue] = useState("");
  const [inputdata, setInputdata] = useState("");
  const [amount, setAmount] = useState("");

  const dispatchFunction = () => {
    dispatch(addExpense(inputdata), setInputdata(""));
    dispatch(addAmount(amount), setAmount(""));
  };

  const chnageHandler = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.Reducer.list);
  const amounts = useSelector((state) => state.Reducer.amount);

  return (
    <div className="container">
      <div>
        <select onChange={chnageHandler}>
          <option defaultValue>Category</option>
          <option>Healthcare</option>
          <option>Food</option>
          <option>Education</option>
          <option>Shopping</option>
        </select>
      </div>
      {/* {value === 'Education' && <h2>oerigh</h2>} */}
      <div className="amount-section">
        <div>
          <input
            className="expense"
            placeholder="Add tour expenses"
            onChange={(e) => setInputdata(e.target.value)}
            value={inputdata}
          />
        </div>
        <div style={{ paddingLeft: "1cm" }}>
          <input
            className="amount"
            type="number"
            placeholder="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
      </div>
      <div>
        {/* <button
          onClick={() => dispatch(addExpense(inputdata), setInputdata(""))}
        >
          Add
        </button>
        <button onClick={() => dispatch(addAmount(amount), setAmount(""))}>
          Add Eamount
        </button> */}
        <button onClick={dispatchFunction}>Add</button>
      </div>
      <div className="amount-section">
        <div>
          {lists.map((elem, id) => {
            return (
              <>
                <section key={elem.id}>
                  <h2 key={elem.id}>{elem.data}</h2>
                </section>
              </>
            );
          })}
        </div>
        <div>
          {amounts.map((el) => {
            return (
              <>
                <h2>{el.data}</h2>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <NavLink to="allexpenses">
          <button>See your Expenses</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Form;
