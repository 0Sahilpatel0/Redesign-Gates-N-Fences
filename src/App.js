// project
import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import Home from './Componets/Homepage';
import NavBar from './Componets/Navbar';
import Inventory from './Componets/Inventory';
import Contact from './Componets/Contact';
import Footer from './Componets/Footer';
import Login from './Componets/login';
import Profile from './Componets/Profile';
import About from './Componets/About';







class App extends Component  {render(){
    
  return (
   <> <NavBar /> 
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/Inventory' element={<Inventory />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/About' element={<About />}></Route>
      </Routes>

      { <Footer /> }
        

   </>
     
    
  );
  
 
}}
export default App;