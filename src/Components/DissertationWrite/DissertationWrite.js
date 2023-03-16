import React from "react";
import "../DissertationWrite/DissertationWrite.css";
import DissertationCard from "./DissertationCard";
import Auth from "../CodeWonder/WonderImg/authentic.svg"
import Badge from "../CodeWonder/WonderImg/badge.svg"
import Head from "../CodeWonder/WonderImg/headphone.svg"
import Timer from "../CodeWonder/WonderImg/timer.svg"

const DissertationWrite = () => {
  return (
    <>
      <div className="container-fluid bckcolor987">

      <div className="my-5 col-8 mx-auto">
          <h4 className="text-center dissertation_head ">
          Benefits of our services
          </h4>
        </div>

      <div className="container-fluid  ">
          <div className="row">
            <div className="col-10 mx-auto">
              <p className="serParat">
              The writing of a dissertation for doctoral students comes with its own unique set of difficulties. Getting their dissertation accepted by university officials, is one of the difficulties they face.
As a result, some doctorate candidates enlist the help of experienced writers and editors to complete the final modifications. The dissertation writing services offered by these writers are used by other people as well.
Every student wants to finish with a well-written paper, but the specific reasons for each action vary from one to the next in the class.

              </p>
            </div>
          </div>
        </div>
        <div className="my-5 col-8 mx-auto">
          <h3 className="text-center codewonder-head123 ">
          The benefits of hiring a Dissertation Writing Service are as follows:
          </h3>
        </div>

       

        <div className="container-fluid ">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row gy-4">
              <DissertationCard
                  title="100% Authenticity"
                  image={Auth}
                  desc="Plagiarism is unacceptable in any writing, especially in your dissertations. Dissertations are meant to present your specialized ideas on your discipline. So, our writers use various plagiarism checkers to ensure great dissertation writing service in uk."
                />  
              <DissertationCard
                  title="High Quality Dissertaiton"
                  image={Badge}
                  desc="Quality is critical. Our expert writers strive to provide the best quality dissertation help services. Let us know the topic and resources, share your ideas or an outline for your paper, and our writers will do their best to write you a paper of the utmost quality."
                />
                <DissertationCard
                  title="Competitive Speed"
                  image={Timer}
                  desc="We understand that students often work on close deadlines and need their papers as quickly as possible. Our writers work hard to meet your deadlines so that you can submit your papers on time and be stress-free."
                />
               <DissertationCard
                  title="Relentless Support"
                  image={Head}
                  desc="At Assignment Writing Services, we believe in round-the-clock help to our clients. Just write to us, and we’ll help you to the best of our abilities!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DissertationWrite;
