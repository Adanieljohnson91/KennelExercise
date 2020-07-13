import React, { useState } from 'react';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        e.preventDefault();
        let target = e.target;
        let { name, value } = target;
        setCredentials((prevState) => {
            return { ...prevState, [name]: value }
        })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        sessionStorage
            .setItem("credentials", JSON.stringify(credentials));
        console.log(props, "logged");
        props.history.push("/animals")

    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <fieldset>
                    <h3>Please sign in</h3>
                    <div className="formgrid">
                        <input onChange={handleChange} type="email"
                            name="email"
                            placeholder="Email address"
                            value={credentials.email}
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={handleChange} type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button type="button" onClick={handleLogin}>Sign in</button>
                </fieldset>
            </form>
        </>
    )
}
export default Login;