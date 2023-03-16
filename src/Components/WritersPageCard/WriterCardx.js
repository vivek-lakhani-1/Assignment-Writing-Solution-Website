import React from "react";
import PropTypes from "prop-types";
import "../WritersPageCard/WritersPageCard.css";
import Shieldp from "../WritersPageCard/img/photo.png";
import Verify from "../WritersPageCard/img/verifyTick.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const WriterCardx = (props) => {
  return (
    <>
      <div className="card-container  mx-auto ">
        <div className="card">
          <div id="WriterCardx--img--box">
            <img src={props.image} className="WriterCardx--img" alt="..." />
          </div>
          <div className="card-body">
            <div className="WriterCardx--nameDiv">
              {/* <div className="name--center"> */}
              <h5 className="WriterCardx-title">{props.title}</h5>
              {/* </div> */}
              <Tippy
                content={
                  <div className="tippy--tooltip">
                    <p>
                      The writer has passed an entry test and verified their ID
                      and academic credentials.
                    </p>
                  </div>
                }
                placement="right"
              >
                <img className="Wverified--tick" src={Verify} />
              </Tippy>
            </div>
            <h5 className="WriterCardx-role">{props.role}</h5>
            <div className="WriterCardx-review">
              <p className="WriterCardx-review--star">
                {props.star}
                {props.star}
                {props.star}
                {props.star}
                {props.star}
              </p>
              <br />
              <p className="WriterCardx-review-count">
                {props.reviewCount} Reviews
              </p>
            </div>
            <div className="WriterCardx--speciality--box">
              <p className="WriterCardx--Writer--speciality1">
                <span className="WriterCardx--speciality--bold--text">
                  {props.experience}
                </span>
                <span className="speciality">Years Experience</span>
              </p>
              <p className="WriterCardx--Writer--speciality">
                <span className="WriterCardx--speciality--bold--text">
                  {props.projects}
                </span>
                <span className="speciality">Projects Completed</span>
              </p>
              <p className="WriterCardx--Writer--speciality2">
                <span className="WriterCardx--speciality--bold--text">
                  {props.citations}
                </span>
                <span className="speciality">Total Citations</span>
              </p>
            </div>
            <div className="button--div--writer">
              <a
                href="/writerprofile"
                className="btn btn-primary WriterCardx--btn"
              >
                {props.btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriterCardx;

WriterCardx.prototype = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};

WriterCardx.defaultProps = {
  title: "Title here",
  image: { Shieldp },
  para: "para here",
  btn: "btn here",
};
