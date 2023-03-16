import React from "react";
import "../CodeWonder/CodeWonder.css";
import WonderCard from "./WonderCard";
import Auth from "../CodeWonder/WonderImg/authentic.svg"
import Badge from "../CodeWonder/WonderImg/badge.svg"
import Head from "../CodeWonder/WonderImg/headphone.svg"
import Timer from "../CodeWonder/WonderImg/timer.svg"

const CodeWonder = () => {
  return (
    <>
      <div className="container-fluid bckcolor--wonder">
        <div className="my-5 col-8 mx-auto">
          <h3 className="text-center codewonder-head ">
          Benefits of our services
          </h3>
        </div>


        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-2">
             
                <WonderCard
                  title="Maintained Confidentiality"
                  image={Badge}
                  desc="As a case study on anonymity, when it comes to the art of writing, confidentiality is essential. We keep the relationship between you and your significant other a closely guarded secret.
                  "
                />
                <WonderCard
                  title="Plagiarism Free"
                  image={Timer}
                  desc="Our Case Study Writing Service ensures complete confidentiality and provides a Plagiarism Report for each Case Study it completes on your behalf.
                  "
                />
                <WonderCard
                  title="Dedicated Writers"
                  image={Auth}
                  desc="Write the best-Case Study Is Our Mission. We want to make certain that the job we get is done with care.
                  "
                />
                <WonderCard
                  title="Quality Assurance"
                  image={Badge}
                  desc="Students can get in touch with us at any time of the day or night. There are numerous ways to get in touch with us.
                  "
                />
                 <WonderCard
                  title="Relentless Support"
                  image={Head}
                  desc="Our staff and your guide are always at your service. We are precise with the time deadlines that we give.
                  "
                />
              </div>
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default CodeWonder;
