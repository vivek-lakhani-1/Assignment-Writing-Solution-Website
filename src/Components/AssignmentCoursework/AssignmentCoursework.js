import React from "react";
import "../AssignmentCoursework/AssignmentCoursework.css";
import "../AssignmentCoursework/AssignmentPoints.js";
import AssignmentPoints from "../AssignmentCoursework/AssignmentPoints.js";

const AssignmentCoursework = () => {
  return (
    <>
      <div className="row paddingbot">
        <div className="col-10 mx-auto">
          <div className="container header_containerabout5">
            <h3 className="text-center assign--head">
              Need Help in your Coursework?
            </h3>
          </div>

          <div className="container-fluid  ">
            <div className="row">
              <div className="col-12 mx-auto">
                <p className="abPara53">
                  Writing university assignments can be a hard thing, especially
                  when the deadline is near and the assignment has not even
                  started. Assignments play an important role in helping
                  students at university gain an edge and score well in their
                  major. It is also very hard to keep up with the pace of the
                  fast world around us. Assignments are important, and so is the
                  exposure and experience during the student phase. When
                  students do their assignments, a lot of important time that
                  could be used for networking and practical experience in their
                  field of expertise is lost.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid secondpadding  ">
            <div className="row">
              <div className="col-12 mx-auto">
                <p className="abPara53">
                  We understand this problem at Assignment Writing Services. We
                  know that once a student loses time, it never comes back.
                  Hence we have an objective to save the time of the Students by
                  helping them outsource their Assignment Writing to us. So that
                  they can earn time, and be better at what is important.
                  Assignment Service at Assignment Writing Services ensures that
                  each of our clients saves time for things that are important
                  as we want them to grow fast and tall.
                  <br />
                  <br />
                  It is our goal to provide a great Assignment Writing Service
                  that gets more marks and more time for students. Our
                  Assignment Writing Service is among the best in this Industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-12 mx-auto">
              <p className="abPara531">
                We ensure quality over quantity and speed over delay.
              </p>
            </div>
          </div>
        </div>

        <div className="my-5 container header_containerabout5 ">
          <h3 className="text-center assign--head">
            We Handle All Writing Assignments, including:
          </h3>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-3">
                <AssignmentPoints title="Economics" />
                <AssignmentPoints title="Pyschology" />
                <AssignmentPoints title="Management" />
                <AssignmentPoints title="Physics" />
                <AssignmentPoints title="Chemistry" />
                <AssignmentPoints title="Mathematics" />
                <AssignmentPoints title="Biology" />
                <AssignmentPoints title="Biotechnolgy" />
                {/* <AssignmentPoints
           title="Anthropology"
           /> */}
                <AssignmentPoints title="Nursing" />
                <AssignmentPoints title="IT" />
                <AssignmentPoints title="Medicine" />
                <AssignmentPoints title="Philosophy" />
                <AssignmentPoints title="Engineering" />
                <AssignmentPoints title="Neurology" />
                <AssignmentPoints title="Kinesiology" />
                <AssignmentPoints title="Agriculture" />
                <AssignmentPoints title="Finance" />
                <AssignmentPoints title="Accounting" />
                <AssignmentPoints title="English" />
                <AssignmentPoints title="Arts" />
                <AssignmentPoints title="English Literature" />
                <AssignmentPoints title="Computer Science" />
                <AssignmentPoints title="Entrepreneurship" />
                <AssignmentPoints title="Law" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentCoursework;
