import React from "react";
import "../Homework Write/HomeworkWrite.css";
import HomeworkCard from "./HomeworkCard";
import Format from "../Homework Write/homework Img/format.svg";
import Head from "../Homework Write/homework Img/headphone.svg";
import People from "../Homework Write/homework Img/people.svg";
import Revision from "../Homework Write/homework Img/revision.svg";
import Round from "../Homework Write/homework Img/round.svg";
import Search from "../Homework Write/homework Img/search.svg";
import Timer from "../Homework Write/homework Img/timer.svg";
import Wallet from "../Homework Write/homework Img/wallet.svg";



const HomeworkWrite=()=>{

    return(
        <>

<div className="container-fluid bckcolor--homework">
        <div className="home-head-margin">
        <h3 className="text-center home-head ">Need Help in your Coursework?</h3>
        
      </div>

      <div className="container-fluid upper--text ">
        <div className="row">
          <div className="col-10 mx-auto">
            <p className="homework--serPara">
            Students and trainees are expected to complete coursework as part of their education. Teachers or learning guides in self-taught courses may specify and assign course assignments. Practice, experimentation, investigation, and writing can all be included in course work (e.g., dissertations, book reports, and essays). When it comes to college, high school, and middle school pupils, coursework is graded and exam scores are used to calculate total course grades. Exams are only a few minutes but coursework can take a few days or even weeks. Students are also allowed to use reference materials such as textbooks, notes, and the Internet during this time.
            </p>
            <p className="homework--serPara">
            We know how difficult it may be to organize all of your readings into a coherent piece of work, we offer coursework help to ensure that you always receive the grade you deserve. Academic coursework, which serves as your final product, typically decides your final grade. In most cases, your final grade is calculated by combining your coursework grade with your final exam score. Inadequate work might obstruct your progress and possibly cause you to fail the course, so this is a major duty to bear. More and more students are choosing to acquire high-quality academic papers these days. All your coursework writing needs are taken care of here. Whether you need help with a subject like law, literature, biology, or any of the many others, you can count on us as one of the best academic writing services accessible. 
<br/>We guarantee that you'll be pleased with the work we do for you.
            </p>

            <p className="homework--serPara--bold">
            It can be challenging to write a piece of coursework, but we're here to help!
          

            </p>
            </div>
            </div>
            </div>


            <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <h3 className="homework--benefits">Benefits of our services</h3>
            <div className="row gy-4">
            
            <HomeworkCard
           image={People}
           title="Proffesional Authors"
           desc="Our writers can always write at the level you request.  We evaluate a writer's identification and qualifications, and they must pass a 'test' and a probationary period before helping our customers."
           />
           <HomeworkCard
           image={Search}
           title="Trustworthy"
           desc="Our secure service puts your requirements first. We keep your privacy safe and in trusted hands. If you have questions, you can ask our in-house Privacy officials. We keep your information private."
           />
           <HomeworkCard
           image={Head}
           title="Excellent Client Service"
           desc="We can help with any grade, length, or subject of University work. Our skilled writers come from all backgrounds, and our Quality Team makes sure the work follows your specifications."
           />
           <HomeworkCard
           image={Round}
           title="Quality Assurance"
           desc="We're honest with orders and prices. Pricing reflects service quality. We only hire the greatest writers and continually test them to ensure high-quality essays, dissertations, and reports."
           />
           <HomeworkCard
           image={Wallet}
           title="Dedication"
           desc="Our goal is to produce the best coursework possible. It is our goal to ensure that the work we are given is done to the highest standard."
           />
           
         
           
           
           {/* <HomeworkCard
           image={Revision}
           title="Free Revision"
           />
           <HomeworkCard
           image={Format}
           title="Paper Formatting"
           />
           <HomeworkCard
           image={Timer}
           title="Fixed Deadlines"
           /> */}




</div>
              </div>
            </div>
          </div>



        </div>
        </>
    
    );
};


 export default HomeworkWrite;