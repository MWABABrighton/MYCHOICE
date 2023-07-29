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
import Chilanga from './pages/Chilanga';
import Birthdays from './pages/Birthdays';
// import Weddings from './pages/Weddings';












function App() { 
  return (
  <div> 
    
     <BrowserRouter>
     <Routes>
        <Route index element={<Home/>}/>
        <Route path ="home" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="Chilanga" element={<Chilanga />}/>
        {/* <Route path="Weddings" element={<Weddings />}/> */}
        <Route path="Birthdays" element={<Birthdays />}/>
       
      </Routes>
      
     </BrowserRouter>

     </div>
       
      
       
      

    
    
  );
}

export default App;

