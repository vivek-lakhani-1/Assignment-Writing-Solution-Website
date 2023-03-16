import React from "react";

import SwiperCore,{ Autoplay} from "swiper";
import "../People Card/Pcard.css";
import "./pserviceHead.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PeopleCard from "../People Card/PeopleCard"

const PcardService=(props)=>{  
    
    SwiperCore.use([Autoplay]);
    
      return (
    
        <div className='Testimonial-main1'>
    

        <div className="my-5 col-10 mx-auto">
            <h3 className="heading--pcardservice123">{props.heading}</h3>
            <br/>
            <br/>
            <p className="p--pcardservice123">{props.para}</p>
        </div>

        <div className="Testimonial-main-container">
                < PeopleCard 
                    slides="3"
                />
        </div>

        <div className='subjects-heading--container--exp container btn-hire'>
            <button type="button" className="btn ">Hire an Expert</button>
        </div>

           
           
    
             
          
           
        
        </div>
        
      )
   


};








export default PcardService;