import React from "react";
import Calendar from "../../assets/CustomCalendar/CustomCalendar.svg";
import './CustomCalendar.css'
import DatePicker from './DatePicker'
const DateInput = () => {

  return (
    <>
      {" "}
      <div className="landing-input-box --landing-form-input-container custom-date--main">
        <label
          className=" landing-input-label less-margin"
          style={{ marginLeft: 15 }}
        >
          Deadline
        </label>
        <input
          className="landing-input-box--data extra-width less-margin --date"
          style={{ marginLeft: 15 }}
          type="text"
          placeholder="-Select Date-"
          name="date"
          disabled
        //   onClick={}
        />
        <img src={Calendar} alt="" className="calendar-logo"/>
        <DatePicker/>
      </div>
    </>
  );
};

export default DateInput;
