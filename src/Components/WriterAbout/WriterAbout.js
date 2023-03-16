import React from "react";
import "../WriterAbout/WriterAbout.css";

const WriterAbout = (props) => {
  return (
    <>
      <div className="WriterAbout--bigbox">
        <div className="WriterAbout--smallbox">
          <div className="row">
            <div className="container-fluid ">
             
                    <div className="col-sm-12 col-md-12 col-lg-12  mx-auto ">
                      
                        <h1 className="WriterAbout--heading">About</h1>

                        <p className="WriterAbout--para">
                         {props.about}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        
            </div>
          
    </>
  );
};

export default WriterAbout;
