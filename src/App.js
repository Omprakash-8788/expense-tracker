import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import AddExpense from './Components/Add Expense/AddExpense';

function App() {
  return (
    // <div >
    //  <div>
    //   <Header/>
    //  </div>
    //  <div>
    //   <Home/>
    //  </div>
    //  <div>
    //   <h2>Footer</h2>
    //  </div>

    // </div>
    <BrowserRouter>
    <Routes>
      
      <Route path='/'  element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='/add-expense' element={<AddExpense/>}/>
      </Route>

      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
