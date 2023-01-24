import { Card } from '@mui/material'
import React from 'react'
import './ExpenseList.css'

const ExpenseList = () => {

    const List = [
        {
            title: "Made a purchase",
            logo: 'lfein',
            createdAt: Date.now(),
            amount: 123,
        },
        {
            title:'Made a purchase',
            logo:'wef',
            createdAt: Date.now(),
            amount:1234,
        },
    ]
  return (
    <div>
        {List.length ? List.map((item) => <Card item={item}/>) : null}
    </div>
  )
}

export default ExpenseList