import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () =>{
    const [employees, setEmployee] = useState([]);
    const getEmployees = async () =>{
        setEmployee(await EmployeeManager.getAll());
    }
    useEffect(()=>{
       getEmployees();
    }, [])
    return(
        <>
        {employees.map(employee =>{
          return <EmployeeCard key={employee.id} employee={employee}/>
        })}
        </>
    )
}
export default EmployeeList;