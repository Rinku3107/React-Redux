import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import{ Route, Routes } from 'react-router-dom';
import Card from './Components/Card';
import CardDetails from './Components/CardDetails';

function App() {
  return (
    <div>
      <Header/>
    <Routes>
    <Route path='/' element={<Card></Card>}></Route>
    <Route path='/cart' element={<CardDetails></CardDetails>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
