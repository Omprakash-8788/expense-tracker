import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Expesnes from "../Expenses/Expesnes";
import { addAmount, addEducation, addExpense } from "../Redux/Actions";
import "./Form.css";


const Form = () => {
  const [value, setValue] = useState("");
  const [inputdata, setInputdata] = useState("");
  const [amount, setAmount] = useState("");
  const [education, setEducation] = useState("");
  const [edu, setEdu] = useState(false);

  const dispatchFunction = () => {
    dispatch(addExpense(inputdata), setInputdata(""));
    dispatch(addAmount(amount), setAmount(""));
  };

  const chnageHandler = (e) => {
    setValue(e.target.value);
    if (value === "Education") {
      dispatch(addEducation(education), setEducation(""));
    }
  };
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.Reducer.list);
  const amounts = useSelector((state) => state.Reducer.amount);
  const educations = useSelector((state) => state.Reducer.education);

  // var total = 0
  // amounts.map((el) =>{
  //   let arr = el.data
  //   // for (var i in arr){
  //   //   total += arr[i]
  //   // }
  //   var sum = arr.reduce(function(a,b){
  //     return a + b
  //     sum = total
  //   }, 0)
  // })
  const EducationExpense = () => {
    setEdu(true);
  };


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
      <div className="exp-amo">
        <div style={{ flex: "1", marginLeft: "3cm" }}>
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
        <div style={{ flex: "1", marginRight: "3cm" }}>
          {amounts.map((el) => {
            return (
              <>
                <h2>{el.data}$</h2>
              </>
            );
          })}
        </div>
      </div>
      <div>

      </div>

      <div>
        <div>
          <NavLink to="allexpenses">
            <button>See your Expenses</button>
          </NavLink>
          <button onClick={EducationExpense}>Education Expenses</button>
          {edu && (
            <div>
              {educations.map((el) => {
                return (
                  <>
                    <h2>{el.data}</h2>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* <div>
        <ul>{() => {
          var total = 0;
          for (var i in amounts) {
            total += amounts[i];
          }
          <>
            <h2>{total}</h2>
            <h2>orgij</h2>
          </>;
        }}
        </ul>
      </div> */}
      {/* <h2>{total}</h2> */}
    </div>
    

  );
};

export default Form;
