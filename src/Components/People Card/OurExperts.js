import React from "react";
import PeopleCard from "../People Card/PeopleCard"
import Exp from "../People Card/Pimage/Our Experts.svg";
import "./OurExperts.css"


const OurExperts = () => {
    return (
      <>
        <div>
            <div className="Our-experts-heading">
                        <h1 className="Our-experts-heading--text--exp">Our Experts</h1>
                        <img src={Exp} className="Our-experts-heading--background--exp" alt="" />
            </div>

            <div className="Our-experts-main-container">
                < PeopleCard 
                    slides="5"
                />
            </div>

            

            <button type="button" className="btn Our-experts-button">
              Hire an Expert
            </button>

        </div>



      </>
  );
};

export default OurExperts;
