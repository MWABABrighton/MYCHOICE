import Clicks from "../components/Clicks";
import FunctionalComp from "../components/FunctionalComp";
import Nav from "../components/Nav";

export default function Home() {
    return ( <body>
        <div>
        <FunctionalComp/> 
        <Nav/>
        <h1> house page</h1>
        <Clicks/>

       </div>

      <div className="image1">
       <p>brighton</p>

      </div>
      <div className="row">
            <div className="column">
                <Clicks/>
                
                
                </div>
                <div className="column">
                <Clicks/>
                
                
                </div>
                <div className="column">
                <Clicks/>
                
                
                </div>
               
                

            
      </div>
      </body>
    )
}