import React, { useState, useEffect } from "react";
import Procedurecard from "./Procedurecard";
import "./pb.css";
const Proced = () => {
  const [fadeProp, setFadeProp] = useState({
    stepNum: "Step - 1",
      stepDes: "Fill up the Quote",
      stepPara:
      "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
  });

  const data = [

    {
      stepNum: "Step - 1",
      stepDes: "Fill up the Quote",
      stepPara: "Take your time and ask all doubts you have. We want you to have clarity over what we offer."  
    },
    {
      stepNum: "Step - 2",
      stepDes: "Get A Free Consultant",
      stepPara:
      "Take your time and ask all doubts you have. We want you to have clarity over what we offer." ,
    },
    {
      stepNum: "Step - 3",
      stepDes: "Know About Our Services",
      stepPara: "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    },
    {
        stepNum: "Step - 4",
        stepDes: "Assign Us The Task",
        stepPara:
        "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    },
    {
        stepNum: "Step - 5",
        stepDes: "Assignment Delivery",
        stepPara:
            "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    },
    {
        stepNum: "Step - 6",
        stepDes: "Share Your Feedback",
        stepPara:
        "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    },
   
  ];

  const [fillColor, setFillColor] = useState({
      width: "0%"
  });

  useEffect(() => {
    changeData();
    changeColor();
  }, []);

  const changeColor = () => {
    let flag = 0;
    setInterval(() => {
      if (flag === 0) {
        setFillColor({
            width: "0%"
        });
        flag = 1;
      }
      else if(flag === 1){
        setFillColor({
          width: "20%"
        });
        flag = 2;
      }else if(flag === 2){
        setFillColor({
          width: "40%"
        });
        flag = 3;
      }else if(flag === 3){
        setFillColor({
          width: "60%"
        });
        flag = 4;
      }else if(flag === 4){
        setFillColor({
          width: "80%"
        });
        flag = 5;
      }else if(flag === 5){
        setFillColor({
          width: "100%"
        });
        flag = 6;
      } else if(flag==6){
        setFillColor({
            width: "0%"
          });
          flag = 0;
      }
      else{
        flag=0;
      }
    }, 3000);
  }

  const changeData = () => {
    let i = 1;
    setInterval(() => {
      setFadeProp(data[i]);
      if (i < 6) {
        i++;
      } else {
        i = 0;
      }
    },3000 );
  };

  return (
    <>
      <div className="proced">
        <div className="proced-heading">
          <h1 className="proced-heading--text">
            Simple 6 Steps procedure for placing your order
          </h1>
        </div>

        <div className="proced-line-container">
          <div className="proced-line" style={fillColor}></div>
          <div className="st --1" style={{left:"-3%"}}>
            <span>1</span>
          </div>
          <div className="st --2" style={{left:"20%"}}>
            <span>2</span>
          </div>
          <div className="st --3" style={{left:"40%"}}>
            <span>3</span>
          </div>
          <div className="st --4" style={{left:"60%"}}>
            <span>4</span>
          </div>
          <div className="st --5" style={{left:"80%"}}>
            <span>5</span>
          </div>
          <div className="st --6" style={{left:"100%"}}>
            <span>6</span>
          </div>
        </div>

        <div className="procedcard-card-container">
          <Procedurecard
            stepNum={fadeProp.stepNum}
            stepDes={fadeProp.stepDes}
            stepPara={fadeProp.stepPara}
          />
        </div>
      </div>
    </>
  );
};

export default Proced;
