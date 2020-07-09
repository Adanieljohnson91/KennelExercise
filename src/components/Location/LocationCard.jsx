import React from 'react'

const LocationCard = (props) => {
  return (
    <>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Location</h5>
            <p className="card-text">
             {props.location.name}
      </p>
            <p className="card-text">
              {props.location.city}
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default LocationCard;