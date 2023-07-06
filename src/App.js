import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path="/" element={<Header />}>
                <Route index element={ <Home/>}/>
                {/* <Route path='service' element={<Service/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/> */}
                <Route path='signup' element={<Register/>}/>
                <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
