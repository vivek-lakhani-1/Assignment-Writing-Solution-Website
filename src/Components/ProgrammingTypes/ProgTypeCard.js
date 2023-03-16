import React from "react";
import PropTypes from 'prop-types';
import "../ProgrammingTypes/ProgrammingTypes.css";


const CaseCard1=(props)=>{

    return(
    <>
    
    
                
    
                
    
    <div className="col-md-10 col-lg-10 col-10  ">
            {/* <div className="card Smain-card92"> */}
  <div className="card-body">
    <h5 className="card-title Smain-title9"><span className="number--x">{props.num}</span>{props.title}</h5>
    <p className="card-paraS93">{props.para}</p>
  </div>
{/* </div> */}
</div>
                
    
    
    
    
    
    
    </>
    
    );
    
    };
    
    export default CaseCard1;
    
    
    CaseCard1.prototype= {
        
        title: PropTypes.string.isRequired, 
        para: PropTypes.string.isRequired, 
    };
    
    CaseCard1.defaultProps = {
        
        title: "Title here", 
        para: "Para here", 
        
    };