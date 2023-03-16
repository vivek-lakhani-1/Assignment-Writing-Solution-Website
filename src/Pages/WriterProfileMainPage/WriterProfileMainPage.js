import React from "react";

import WriterProfilePage from "../../Components/WriterProfilePage/WriterProfilePage";

const WriterProfileMainPage = (props) => {
  return (
    <>
     
     <WriterProfilePage
     image={props.image}
     name={props.name}
     role={props.role}
     exp={props.exp}
     projects={props.projects}
     citations={props.citations}
     about={props.about}
     />
      
     
     </> 
    
  );
};

export default WriterProfileMainPage;
