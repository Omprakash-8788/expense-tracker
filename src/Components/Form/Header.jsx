import React from 'react'
import { Outlet } from 'react-router-dom'

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