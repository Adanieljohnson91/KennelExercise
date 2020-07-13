import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager'

let employeeTemp = {name:"", job:""}

const EmployeeForm = (props) =>{
    const [employee, setEmployee] = useState(employeeTemp)
    const onChange = (e)=>{
        let target = e.target;
        let {name, value} = target;
        setEmployee({...employee, [name]:value})
    }
    const onClick = async (e) =>{
        e.preventDefault();
        console.log(employee, "employee")
       await EmployeeManager.add(employee);
        setEmployee(employeeTemp);
        props.getEmployees();

    }
    return (
        <>
        <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Employee's Name</label>
    <input
      type="text"
      className="form-control"
      id="employee-name"
      name="name"
      onChange={onChange}
      value={employee.name}
      placeholder="employees Name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Employee's Job</label>
    <input
      type="text"
      className="form-control"
      name="job"
      id="employee-job"
      value={employee.job}
      onChange={onChange}
      placeholder="jobs Name"
    />
  </div>
  <button type="button" onClick={onClick}>Add employee</button>
</form>

        </>
    )
}
export default EmployeeForm;