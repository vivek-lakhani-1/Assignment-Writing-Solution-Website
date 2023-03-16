import React from "react";
import "../WriterProfileProvide/WriterProfileProvide.css";
import Tick from "../WriterProfileProvide/img/tick.svg"


const WriterProfileProvide=()=>{

    return(

<>
<div className="col-md-10 col-lg-10 col-10 mx-auto ">
<div class="card WriterProfileProvide--card">
  
  <div class="card-body WriterProfileProvide--body">
    <h5 class="WriterProfileProvide--card-title">We provide you with:</h5>
    <p class="WriterProfileProvide--card-text"><span className="card--tick--span"><img src={Tick}/></span>Dedication</p>
    <p class="WriterProfileProvide--card-text"><span className="card--tick--span"><img src={Tick}/></span>All time availability</p>
    <p class="WriterProfileProvide--card-text"><span className="card--tick--span"><img src={Tick}/></span>Plagarism Free work</p>
    <p class="WriterProfileProvide--card-text"><span className="card--tick--span"><img src={Tick}/></span>Citations Accuracy</p>
    <p class="WriterProfileProvide--card-text"><span className="card--tick--span"><img src={Tick}/></span>Perfect Timing</p>
    
    <a href="#" class="btn btn-WriterProfileProvide">Hire Me</a>

  </div>
  <div className="WriterProfileProvide--footer_info">
        {/* <hr className="hr1" /> */}
  <div className="or--div">
    <p className="or--para">OR</p>
  </div>
  </div>
 
<div className="WriterProfileProvide--links">
<a className="a--tag--writerprofileprovide" href="#"><p className="WriterProfileProvide--links--text">Explore Tools</p></a>
<a className="a--tag--writerprofileprovide" href="#"><p className="WriterProfileProvide--links--text">Read Blogs</p></a>
</div>
</div>

</div>


</>
    );
};

export default WriterProfileProvide;