import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StarIcon from '@mui/icons-material/Star';


function renderComponent(n) {

  const list = []

  for (var i = 0; i<n; i++) {
    list.push(<StarIcon style={{ color: "#F2C94C" }}/>)
  }

  return (
    <div>
      {list}
    </div>
  )
}


const Pc = (props) => {
  return (
    <>
      <div className="pc-container">
        <img className="pc-img" src={props.image} alt="R" />
        <h2 className="pc-name">{props.name}</h2>
        <h3 className="pc-subname">{props.position}</h3>
        <span className="pc-rating">
          
          {renderComponent(props.rating)}
          {/* {props.rating} */}
        </span>
        <span className="pc-review">{props.review + " Reviews"}</span>

        <div className="pc-data-details">
          <p>
            {props.experience + " Years Experience"}
            <br />
            {props.projects + " Projects Completed"}
            <br />
            {props.citations + " Citations"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Pc;

// Pc.prototype = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
// };

// Pc.defaultProps = {
//   title: "Title here",
//   icon: "fa-solid fa-ribbon",
// };
