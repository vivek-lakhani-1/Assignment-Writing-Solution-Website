import React from 'react'
import "./Procedurecard.css"
const Procedurecard = (props) => {
  return (
    <>
        <div className="procedcard">
                
                <div className="st-border-container">
                  <h1 className="st-num--text">{props.stepNum}</h1>
                  <h1 className="st-des--text">{props.stepDes}</h1>
                  <p className="st-para--text">{props.stepPara}</p>
                </div>
                
        </div>
    </>

  )
}

export default Procedurecard