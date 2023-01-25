import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expesnes from "../Expenses/Expesnes";
import Form from "./Form";
import Header from "./Header";

const Container = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Form />} />
            <Route path="allexpenses" element={<Expesnes />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container;
