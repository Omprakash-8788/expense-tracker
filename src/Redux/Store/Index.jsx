import {combineReducers} from 'redux'
import { ExpenseReducer } from '../Reducer/Expenses'
import {configureStore} from '@reduxjs/toolkit'

const Reducer = combineReducers({
    expenseReducer: ExpenseReducer,
})

const store = configureStore({
    Reducer,
})

export default store;