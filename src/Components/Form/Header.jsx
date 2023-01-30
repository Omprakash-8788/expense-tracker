import React from 'react'
import { Outlet } from 'react-router-dom'
import Expesnes from '../Expenses/Expesnes'

const Header = () => {
  
  return (
    <>
    <div>
        <h2>Wecome to Expense tracker</h2>
    </div>
    

    <Outlet/>
    </>
  )
}

export default Header