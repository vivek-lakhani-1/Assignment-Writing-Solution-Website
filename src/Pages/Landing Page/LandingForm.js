import React, { useState } from "react";
import "./LandingForm.css";
import axios from "axios";
import upload from "../../assets/Landing/upload.svg";
import { useDropzone } from "react-dropzone";
import CustomNumberPicker from "./CustomNumberPicker";
// import DateInput from "../../Components/CustomCalendar/DateInput";
// import CustomCalendar from "../../Components/CustomCalendar/CustomCalendar";

const LandingForm = () => {
  //States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [deadline, setDeadline] = useState("");
  const [check, setChecked] = useState(false);
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const [subject, setSubject] = useState("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [selectedFile, setSelectedFile] = useState(null);
  const [wordCounter, setWordCounter] = useState(0);
  const [sliderValue, setSliderValue] = useState("5000");

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const onChangeFile = (event) => {
    console.log("files")
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
    console.log(selectedFile.name);
  };

  const handleSliderOnChange = (event) => {
    setSliderValue(event.target.value);
    const sliderValue = document.querySelector(".slider-value--text");
    // sliderValue.style.left = event.target.value / 40 + "%";
  };

  const onChecked = (e) => {
    // let landingCounter = document.querySelector(".landing-counter");
    // let inputWord = document.querySelector(".landing-counter--input")
    // if (check) {

    // }
    // landingCounter.ariaDisabled();
    // setChecked(true);
    console.log(e.target.value);
  };

  let submitForm = async (event) => {
    console.log("Submit");
    event.preventDefault();
    let formData = new FormData();
    let datetime = new Date();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("country", country);
    formData.append("subject", subject);
    formData.append("deadline", deadline);
    formData.append("word_count", sliderValue);
    formData.append("additional_instructions", additionalComments);

    formData.append("document", selectedFile);

    await axios.post(
      "https://murmuring-dawn-52316.herokuapp.com/assignment/orders/make-order/",
      formData
    );
    // console.log(formData);
  };

  return (
    <>
      <div className="landing-form">
        <form action="" method="post" className="landing-form--content">
          <div className="container --landing-form-input-container d-flex flex-row align-items-center justify-content-between d-flex flex-row align-items-center justify-content-between">
            <div className="landing-input-box">
              <label className="landing-input-label">Full Name</label>
              <input
                className="landing-input-box--data text-dark"
                type="text"
                placeholder="Enter Name"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="landing-input-box">
              <label className=" landing-input-label">Email Address</label>
              <input
                className="landing-input-box--data text-dark"
                type="text"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Number Input */}

          <CustomNumberPicker
            contact={contact}
            setContact={setContact}
            country={country}
            setCountry={setCountry}
          />

          {/* Deadline */}
          {/* <DateInput/> */}
          <div className="landing-input-box --landing-form-input-container">
            <label
              className=" landing-input-label less-margin"
              style={{ marginLeft: 15 }}
            >
              Deadline
            </label>
            <input
              className="landing-input-box--data text-dark extra-width less-margin"
              style={{ marginLeft: 15 }}
              type="date"
              placeholder="-Select Date-"
              name="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          {/* Input institution and subject */}
          <div className="container --landing-form-input-container d-flex flex-row align-items-center justify-content-between">
            <div className="landing-subject landing-input-box">
              <label className=" landing-input-label">Subject</label>
              <input
                className="landing-input-box--data text-dark"
                type="text"
                placeholder="Enter Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="landing-institute landing-input-box">
              <label className=" landing-input-label">Institute</label>
              <input
                className="landing-input-box--data text-dark input"
                type="text"
                placeholder="Enter Institute"
                name="institute"
              />
            </div>
          </div>
          {/* Dropbox and word count */}
          <div
            className="container --landing-form-input-container d-flex flex-row"
            style={{ marginTop: 18 }}
          >
            <div
              className="landing-word-count-container d-flex flex-column"
              style={{ marginLeft: 15 }}
            >
              <label className=" landing-input-label">Wordcount</label>
              <label
                class="landing-container landing-input-label"
                style={{ marginTop: 8 }}
              >
                No Wordcount
                <input type="checkbox" onChange={onChecked} />
                <span class="checkmark"></span>
              </label>
              <div className="landing-word-counter">
                <button
                  className="landing-counter --landing-left-counter"
                  onClick={(e) => {
                    e.preventDefault();
                    var temp = parseInt(wordCounter - 1);
                    setWordCounter(temp);
                  }}
                >
                  -
                </button>
                <input
                  className="landing-input-box--data text-dark landing-counter--input"
                  type="number"
                  placeholder={wordCounter}
                  name="wordCount"
                  value={wordCounter}
                  onChange={(e) => {
                    e.preventDefault();
                    setWordCounter(e.target.value);
                  }}
                />
                <button
                  className="landing-counter --landing-right-counter"
                  onClick={(e) => {
                    e.preventDefault();
                    var temp = parseInt(wordCounter + 1);
                    setWordCounter(temp);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="container-input-range">
              <div className="slider-value">
                <span className="slider-value--text">{sliderValue}</span>
              </div>
              <div className="field">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={sliderValue}
                  step="100"
                  onChange={handleSliderOnChange}
                  required
                  name="words"
                />
              </div>
              <div className="value">
                <span>0</span>
                <span>2000</span>
                <span>4000</span>
                <span>6000</span>
                <span>8000</span>
                <span>10000</span>
              </div>
            </div>
            <div className="landing-dropbox-main landing-dropbox-web">
              <label className=" landing-input-label">Upload Files</label>
              <section className="landing-main-dropbox">
                <div
                  className="landing-drop-zone"
                  {...getRootProps({ className: "landing-dropzone" })}
                >
                  <input
                    {...getInputProps()}
                    name="filename"
                    onChange={onChangeFile}
                  />
                  <div className="landing-drop-box-details">
                    <img src={upload} alt="logo" />
                    <p
                      className="landing-dropbox-text"
                      style={{ marginLeft: 17.78, marginTop: 15 }}
                    >
                      Upload Files
                    </p>
                  </div>
                </div>
                <ul className="landing-fileName">{files}</ul>
              </section>
            </div>
          </div>
          <div className="landing-input-box landing-input--textarea">
            <label className="landing-input-label">
              Additional Instruction
            </label>
            <textarea
              className="landing-input-box--data text-dark landing-text-area"
              type="text"
              name="additionalInstruction"
              placeholder="Enter Additional Instructions"
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
            />
          </div>
          <div
            className="landing-dropbox-main landing-dropbox-mob"
            style={{ marginLeft: 15 }}
          >
            <section className="landing-main-dropbox">
              <div
                className="landing-drop-zone"
                {...getRootProps({ className: "landing-dropzone" })}
              >
                <input
                  {...getInputProps()}
                  name="filename"
                  onChange={onChangeFile}
                />
                <div className="landing-drop-box-details">
                  <img src={upload} alt="logo" />
                  <p
                    className="landing-dropbox-text"
                    style={{ marginLeft: 17.78, marginTop: 15 }}
                  >
                    Upload Files
                  </p>
                </div>
              </div>
              <ul className="landing-fileName">{files}</ul>
            </section>
          </div>
          <div className="container d-flex flex-row justify-content-center">
            <button
              className="landing-submit"
              type="submit"
              onClick={(event) => submitForm(event)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LandingForm;
