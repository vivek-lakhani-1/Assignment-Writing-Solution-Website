import React from 'react'

const LocationCard = ({subheading,content,contact,image}) => {
  return (
    <div className="locationcard-container-wrapper">    
    <div className="locations">
      {image.map((src, idx) => {
        return (
          <div className="locations-img">
              <img className="location-img-icon" key={idx} src={src} alt="img" />
          </div>
        );
      })}

      <div>
        <h5 className='location-subheading'>{subheading}</h5>  
        <p className="locationcard-content">{content}</p>
      </div>
    </div>
  </div>
  )
}

export default LocationCard
// {contact && <div className="locationcards-details">{contact}</div>}