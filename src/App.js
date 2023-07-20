//import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  } from 'react-router-dom'
import React from 'react';
//import './App.css';
import Contact from './pages/Contact'
import Home from './pages/Home'












function App() { 
  return (
  <div> 
    
     <BrowserRouter>
     <Routes>
        <Route index element={<Home/>}/>
        <Route path ="home" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
       
      </Routes>
      
     </BrowserRouter>

     </div>
       
      
       
      

    
    
  );
}

export default App;

