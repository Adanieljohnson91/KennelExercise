import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeCard from './EmployeeCard';
import EmployeeForm from "./EmployeeForm";
import RequireAuth from "../auth/RequireAuth";
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
        <EmployeeForm  getEmployees={getEmployees}/>
        {employees.map(employee =>{
          return <EmployeeCard key={employee.id} employee={employee} getEmployees={getEmployees} />
        })}
        </>
    )
}
export default RequireAuth(EmployeeList);