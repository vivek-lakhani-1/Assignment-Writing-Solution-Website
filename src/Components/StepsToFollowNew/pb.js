import React, { useState, useEffect } from "react";
import "./pb.css";
import Heading from '../../assets/StepsToFollow/heading.svg'

const Proced = () => {
  const [fadeProp, setFadeProp] = useState({
    stepNum: "Step - 1",
    stepDes: "Fill up the Quote",
    stepPara: "Take your time and ask all doubts you have. We want you to have clarity over what we offer."  
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

  const content = data[fadeProp % data.length];

  const changeColor = () => {
    let flag = 0;
    setInterval(() => {
      if (flag === 0) {
        setFillColor({
            width: "20%"
        });
        flag = 1;
      }
      else if(flag === 1){
        setFillColor({
          width: "40%"
        });
        flag = 2;
      }else if(flag === 2){
        setFillColor({
          width: "60%"
        });
        flag = 3;
      }else if(flag === 3){
        setFillColor({
          width: "80%"
        });
        flag = 4;
      }else if(flag === 4){
        setFillColor({
          width: "100%"
        });
        flag = 5;
      }else{
        setFillColor({
          width: "0%"
        });
        flag = 0;
      }
    }, 4000);
  }

  const changeData = () => {
    let i = 1;
    setInterval(() => {
      setFadeProp(data[i]);
      if (i < 5) {
        i++;
      } else {
        i = 0;
      }
    }, 4000);
  };

  return (
    <>
      <div className="proced">
        <div className="proced-heading">
          <img src={Heading} alt="heading" className="proced-heading--img"/>
          <h1 className="proced-heading--text">
            Steps to Follow
          </h1>
        </div>

        <div className="proced-line-container">
          <div className="proced-line" style={fillColor}></div>
          <div className="st " style={{left:"-1%"}}>
            <span>1</span>
          </div>
          <div className="st " style={{left:"18%"}}>
            <span>2</span>
          </div>
          <div className="st " style={{left:"38%"}}>
            <span>3</span>
          </div>
          <div className="st " style={{left:"58%"}}>
            <span>4</span>
          </div>
          <div className="st " style={{left:"78%"}}>
            <span>5</span>
          </div>
          <div className="st " style={{left:"97%"}}>
            <span>6</span>
          </div>
        </div>

        
        <div key={fadeProp} id="step-number">
              <div className="content">
                <div className="step-to-header">
                  <h3 className="step-to-stepNum">{fadeProp.stepNum}</h3>
                  <h3 className="step-to-stepDes">{fadeProp.stepDes}</h3>
                </div>
                  <p>{fadeProp.stepPara}</p>
              </div>
         </div>
      </div>
    </>
  );
};

export default Proced;
