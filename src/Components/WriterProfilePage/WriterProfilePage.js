import React from "react";
import ReferFriend from "../ReferFriend/ReferFriend";
import WriterAbout from "../WriterAbout/WriterAbout";
import WriterProfile from "../WriterProfile/WriterProfile";
import "../WriterProfilePage/WriterProfilePage.css"
import WriterProfileProvide from "../WriterProfileProvide/WriterProfileProvide";
import WriterProfileReview from "../WriterProfileReview/WriterProfileReview";

const WriterProfilePage=(props)=>{


    return(
<>
<div className="container-fluid  ">
            <div className="row">
              <div className="col-12 mx-auto">

<div className="WriterProfilePage--container">

<div className="WriterProfilePage--container--left">

<WriterProfile
image={props.image}
name={props.name}
role={props.role}
exp={props.exp}
projects={props.projects}
citations={props.citations}
/>
<WriterAbout
about={props.about}
/>
<WriterProfileReview/>
</div>
<div className="WriterProfilePage--container--right">
<WriterProfileProvide/>
<div className="refer--refer">
<ReferFriend/>
</div>
</div>
</div></div></div>
</div>

</>


    );
};

export default WriterProfilePage;