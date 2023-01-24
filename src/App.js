import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
     <div>
      <Header/>
     </div>
     <div>
      <Home/>
     </div>
     <div>
      <h2>Footer</h2>
     </div>

    </div>
  );
}

export default App;
