import React from 'react';
import { Redirect } from 'react-router-dom';

const RequireAuth = (Component) =>{
    const isLoggedIn = () => {
        let result = sessionStorage.credentials === undefined ? false : true;
       return result;
    }
    return (props) =>{
        if(isLoggedIn()){
         return   <Component {...props}/>
        }else{
            return <Redirect to="/login"/>
        }
    }
}
export default RequireAuth;