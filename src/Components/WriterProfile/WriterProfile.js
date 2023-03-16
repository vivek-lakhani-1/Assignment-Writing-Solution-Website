import React from "react";
import "../WriterProfile/WriterProfile.css";
import Andrew from "../WriterProfile/WriterProfileImage/Andrew.png";
import Verify from "../WriterProfile/WriterProfileImage/verifyTick.svg";
import StarIcon from "@mui/icons-material/Star";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const WriterProfile=(props)=>{
  
  return(
    <>
    
      <div className="WriterProfile--bigbox">
        <div className="WriterProfile--smallbox">
          <div className="row">
            <div className="container-fluid ">
              <div className="col-sm-12 col-md-12 col-lg-12  mx-auto  writerprofile--box">
                <div className="WriterImg--container">

                  <img className="WriterImg--Img" src={props.image} />

                </div>

                <div className="Writer--achievement">
                 <div className="writer-nameBox-main">

                  <div className="Writer--nameBox">
                    <h1 className="writer--name">{props.name}</h1>
                    <Tippy
                      
                      content={
                        <div className="tippy--tooltip">
                            <p>The writer has passed an entry test and verified their ID and academic credentials.</p>
                        </div>
                      }
                      placement="right"
                    >
                      <img className="verified--tick" src={Verify} />
                    </Tippy>
                  </div>

                  <h3 className="writer--department">{props.role}</h3>
                  <br />
                  <p className="writer--rev">
                    <span><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /></span> 220 Reviews
                  </p>

                      

                  <div className="speciality--box">
                    <p className="Writer--speciality1">
                      <span className="speciality--bold--text">{props.exp} Years</span>{" "}
                      Experience
                    </p>
                    <p className="Writer--speciality">
                      <span className="speciality--bold--text">
                        {props.projects} Projects
                      </span>{" "}
                      Completed
                    </p>
                    <p className="Writer--speciality">
                      <span className="speciality--bold--text">{props.citations} Total </span>
                      Citations
                    </p>
                    <p className="Writer--speciality2">
                      <span className="speciality--bold--text">
                        3 Days Ago{" "}
                      </span>
                        Last Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default WriterProfile;
