import React, { useState } from "react";
import "./Topfold.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
const Topfold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  return (
    <div className="topfold">
        {window.location.pathname ==='/' ? <div className="home-topfold">
        <div className="searchbar">
          <i class="fi-rr-search"></i>
          <SearchIcon />
          <input
            placeholder="Search for Expenses"
            value={query}
            onChange={(e) => handleQuery(e)}
          />
        </div>
        <Link to = '/add-expense'>
        <div className="add-button">
          <label>
            <AddIcon />
            Add
          </label>
        </div>
        </Link>
      </div> : (
        <div className="add-topfold">
            <Link to ='/'>
            <div className="add-topfold-button">
                <i className="fi-rr-angle-left"></i>
                <ArrowBackIosIcon/>
                <label>Back</label>
            </div>
            </Link>
            <div className="add-topfold-button">
                <i className="fi-rr-cross-circle"></i>
                <CancelIcon/>
                <label>Cancel</label>
            </div>

        </div>
      )}
      
    </div>
  );
};

export default Topfold;
