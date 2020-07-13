import React, { useState } from 'react';
import EmployeeManager from "../../modules/EmployeeManager"

const EmployeeCard = (props) => {
  const [edit, setEdit] = useState(false);
  const [employee, setEmployee] = useState({name:props.employee.name, job:props.employee.job})
  const onEditClick = (e) =>{
    setEdit(!edit);
  }
  const onSaveClick = async (e) =>{
   await EmployeeManager.edit(employee, props.employee.id);
    setEdit(!edit);
    props.getEmployees();
  }
  const onChange = (e) =>{
    let target = e.target;
    let {name, value} = target;
    setEmployee((prevState)=>{
      return{
        ...prevState,
        [name]:value
      }
    })
    
  }

  return (
    <>
      {!edit ? <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.employee.name}</h5>
            <p className="card-text">
              {props.employee.job}
            </p>
            <p className="card-text">
            <button onClick={onEditClick}>Edit</button>
            <button>Fire</button>
            <button>Details</button>
            </p>
          </div>
        </div>
      </div> : 
      <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <input name="name" value={employee.name} onChange={onChange}></input>
            <input name="job" value={employee.job} onChange={onChange}></input>
            <p className="card-text">
            <button onClick={onSaveClick}>Save</button>
            <button>Fire</button>
            <button>Details</button>
            </p>
          </div>
        </div>
      
      }

    </>
  )
}

export default EmployeeCard;