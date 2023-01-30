import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Expesnes  (props)  {
  const lists = useSelector((state) => state.Reducer.list);

  const {  home } = props

  return (
    <>
      <div>
        <select >
          <option defaultValue>Category</option>
          <option>Healthcare</option>
          <option>Food</option>
          <option>Education</option>
          <option>Shopping</option>
        </select>
      </div>
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
      
     
    </>
  );
};

export default Expesnes;
