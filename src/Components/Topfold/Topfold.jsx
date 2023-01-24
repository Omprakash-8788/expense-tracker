import React, { useState } from "react";
import "./Topfold.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';

const Topfold = () => {
    const [query, setQuery] = useState('')
    const handleQuery = (e) =>{
        setQuery(e.target.value)
        console.log(query)
    }
  return (
    <div className="topfold">
      <div className="home-topfold">
        <div className="searchbar">
          <i class="fi-rr-search"></i>
          <SearchIcon/>
          <input placeholder="Search for Expenses" value={query} onChange={(e) => handleQuery(e)} />
         
          
        </div>
        <div className="add-button">
            <label><AddIcon/>Add</label>

        </div>
      </div>
    </div>
  );
};

export default Topfold;
