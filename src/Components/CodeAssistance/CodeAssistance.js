import React from "react";
import "../CodeAssistance/CodeAssistance.css";
import And from "../CodeAssistance/codeAssisImg/android.svg";
import App from "../CodeAssistance/codeAssisImg/app dev.svg";
import Cloud from "../CodeAssistance/codeAssisImg/cloud.svg";
import Java from "../CodeAssistance/codeAssisImg/java.svg";
import Mat from "../CodeAssistance/codeAssisImg/matlab 1.svg";
import Real from "../CodeAssistance/codeAssisImg/realAndroid.svg";
import AssistanceCard from "./AssistanceCard";



const CodeAssistance=()=>{

    return(
        <>

<div className="container-fluid codebck">
        <div className="my-5 col-10 mx-auto">
        <h3 className="text-center codeassis-head ">Benefits of our services</h3>
        <p className="codeassis--para">
        We guarantee that you will receive exactly what you require. You have the right to present the assignment that we have sent you.
We are confident that your professor will be impressed by the paper and give you high marks.
This means you shouldn't second guess your decision to use our programming homework assistance services for students.

        </p>
        
      </div>



            <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            

            <AssistanceCard
            image={And}
            title="Privacy Concious"
            desc="Respect for individual privacy and the protection of personal information
            Our secure service ensures that your personal information will remain private.
            "
            />
            <AssistanceCard
            image={Real}
            title="Quality Assured"
            desc="We do understand that programs are part of Intellectual Property. Once you get the program it becomes your Intellectual Property."
            />
            <AssistanceCard
            image={Cloud}
            title="Stress-Free Working"
            desc="It's difficult to learn how to program. You can sit back and relax while our program writing service takes care of your project."
            />
            <AssistanceCard
            image={Java}
            title="Reasonable Prices"
            desc="You can be sure of a great grade in your final Programming project if you hire a custom programmer from Assignment Writing Services."
            />
            <AssistanceCard
            image={Mat}
            title="Respect for IPR"
            desc="Our goal is to help you locate a dissertation writing service that is affordable. Every university student desires a cost-effective service. You can get it from us."
            />
            {/* <AssistanceCard
            image={App}
            title="Android App Development"
            /> */}




</div>
              </div>
            </div>
          </div>



        </div>
        </>
    
    );
};



 export default CodeAssistance;