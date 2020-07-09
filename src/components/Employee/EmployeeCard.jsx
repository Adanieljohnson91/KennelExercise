import React from 'react'

const EmployeeCard = (props) => {
  return (
    <>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.employee.name}</h5>
            <p className="card-text">
              {props.employee.job}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default EmployeeCard;