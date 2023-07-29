import React from "react";

import FunctionalComp from "../components/FunctionalComp";
import Nav from "../components/Nav";

import DSC from '../assets/images/img_forest.jpg';
import DSC1 from '../assets/images/HM6A4869.jpg';
import DSC2 from '../assets/images/HM6A4886.jpg';
import DSC4 from '../assets/images/HM6A4868.jpg';
import DSC3 from '../assets/images/HM6A4863.jpg';

export default function Home() {
    return ( <body>
        <div>
        <FunctionalComp/> 
        <Nav/>
        <div style={{backgroundImage: "url(/.assets/images/HM6A4863.jpg)"}} >
     </div>

       </div>

      
      
           
                
               
                <div className="photo1">
        <img src={DSC} alt="pic"/>
        <img src={DSC1} alt="pic"/>
        <img src={DSC2} alt="pic"/>
        <img src={DSC3} alt="pic"/>
        <img src={DSC4} alt="pic"/>
        <p>MY CHOICE PHOTOGRAPHY </p>
        
        </div>
                
                
              
               
               

   

      


      </body>
    )
}