import React from "react";


 function Nav (){
return( 
    <ul>
    
    <li><a class="active" href="Home">Home</a></li>
    <li><a href="#news">Prices</a></li>
    <li><a href="Contact">Contact</a></li>
    <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li>
  </ul>
);

}export default Nav;