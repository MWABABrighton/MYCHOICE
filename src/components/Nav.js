import React from "react";


 function Nav (){
return( 
    <ul>
    
    <li><a class="active" href="Home">Home</a></li>
    <li><a href="#news">PRICES</a></li>
    <li><a href="Contact">CONTACT</a></li>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">GALLERY</a>
    <div class="dropdown-content">
      <a href="Chilanga">CHILANGA MULILO</a>
      <a href="Weddings">WEDDING</a>
      <a href="Birthdays">BIRTHDAY</a>
    </div>
  </li>
  </ul>
);

}export default Nav;