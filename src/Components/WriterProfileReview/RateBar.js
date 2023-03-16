import React from "react";
import "../WriterProfileReview/RateBar.css";

const Progress = (props) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="mainbox">
		<div className="progress">
			<div className="progress-done" style={style}>
				<p></p>
			</div>
			</div>
			<div className="progress--percentage">
			<p>{props.done}%</p>
		</div>
			</div>
			
	)
};
export default Progress;