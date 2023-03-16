
import React,{useState} from 'react'
import copy from "copy-to-clipboard"; 
import "../ReferFriend/ReferFriend.css";

import PropTypes from 'prop-types';
import CardScratch from "./cardScratch";
import Gift1 from "./image/gift1.svg";
import Gift2 from "./image/gift2.svg";
import Dot from "./image/dots.svg";




const ReferFriend=(props)=>{

    const [copyText, setCopyText] = useState('MOSJ22OR');
  
    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 
    
    const copyToClipboard = () => {
       copy(copyText);
       alert(`"${copyText}" successfully copied`);
    }
    
    return(

        <>
        <div className="col-md-10 col-lg-10 col-10 mx-auto ">
        <div class="card refer--card">
        <img src={Gift1} className="refercard-image--background1" alt="..." />
        <img src={Gift2} className="refercard-image--background2" alt="..." />
        <img src={Dot} className="refercard-image--background3" alt="..." />
        <img src={Dot} className="refercard-image--background4" alt="..." />
        <img src={Dot} className="refercard-image--background5" alt="..." />
        <img src={Dot} className="refercard-image--background6" alt="..." />
        <img src={Dot} className="refercard-image--background7" alt="..." />
          
          <div class="card-body refer--body">
            <h5 class="refer--card-title">Refer A Friend!</h5>
            <div className="tap--copy">
    <p class="refer--card-text">Refer a friend and save  on every order.</p>
    </div>
   
      <CardScratch width={189} height={50}>
      <input 
            type="text"
            class="input-box" 
              value={copyText} 
                onChange={handleCopyText}
                onClick={copyToClipboard} 
                  placeholder='Referal Code Successfully Copied' />
    
         
          </CardScratch>
  </div>
</div>
</div>


</>
    );
};

export default ReferFriend;