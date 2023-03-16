import React from "react";
import "../Compose/Compose.css";
import ComposeCard from "./ComposeCard";



const Compose=()=>{

    return(
        <>

<div className="container-fluid bckcolor">
        

      


            
        <div className="row">
        <h6 className="short-head72">We lend professional prgramming assistance in:</h6>
          <div className="col-10 mx-auto">
            <div className="row gy-3">
            

           <ComposeCard
           title="Java"
           />
           <ComposeCard
           title="C / C++"
           />
           <ComposeCard
           title="Python"
           />
           <ComposeCard
           title="ASP.Net"
           />
           <ComposeCard
           title="Ruby"
           />
           <ComposeCard
           title="Pascal"
           />
           <ComposeCard
           title="C#"
           />
           <ComposeCard
           title="MySQL"
           />
           <ComposeCard
           title="MathCAD"
           />
           <ComposeCard
           title="Oracle"
           />
           <ComposeCard
           title="Dot Net"
           />
           <ComposeCard
           title="Adobe Flash"
           />
           <ComposeCard
           title="Database"
           />




              </div>
            </div>
          </div>



        </div>
        </>
    
    );
};




 export default Compose;