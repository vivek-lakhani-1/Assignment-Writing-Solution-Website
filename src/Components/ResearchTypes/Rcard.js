import React from "react";
import PropTypes from 'prop-types';
import "../ResearchTypes/ResearchTypes.css"
import "../ResearchTypes/Rcard.css"
import Shield from "../About Us Top/AboutImg/Secured.svg"

const RCard=(props)=>{

return(
<>


            

            

<div className="col-sm-10 col-md-10 col-lg-5 col-10 mx-auto ">
<div class="card research--card " >
  
  <div class="card-body ">
    <h5 class="card-title research--card--title">{props.title}</h5>
    <p class="card-text research--card--para">{props.para}</p>
    
  </div>
</div>
</div>
            






</>

);

};

export default RCard;


RCard.prototype= {
    
    title: PropTypes.string.isRequired, 
    para: PropTypes.string.isRequired, 
};

RCard.defaultProps = {
    image: {Shield}, 
    title: "Title here", 
    para: "Para here", 
    
};

