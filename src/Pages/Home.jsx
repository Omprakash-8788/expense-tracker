import React from "react";
import Topfold from "../Components/Topfold/Topfold";
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <div>
        <Topfold/>
      </div>
      <div>ExpenseList</div>
    </div>
  );
};

export default Home;
