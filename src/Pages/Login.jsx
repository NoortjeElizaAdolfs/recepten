import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import useToken from "../Components/Auth/useToken";

async function loginUser(credentials) {
    return fetch('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => {
            // log the status code and the response body
            console.log(data.status, data.statusText);
            console.log(data.body);
            // check if the response is ok (status code 200-299)
            if (data.ok) {
                // parse the JSON response
                return data.json();
            } else {
                // throw an error with the status code and text
                throw new Error(`${data.status} ${data.statusText}`);
            }
        })
}

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const { setToken } = useToken();
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // call the loginUser function and await for the result
            const result = await loginUser({
                "username": username,
                "password": password
            })
            // set the token in the state
            setToken(result);
            navigate("/");
        } catch (error) {
            // log the error message
            console.error(error.message);
        }
    }
  return (
    <>
        <div className='container auth'>
            <div className='fb-item'>
                <h1 className='auth-title'>Log In Here</h1>
            </div>
            <div className='fb-item'>
                <form onSubmit={handleSubmit} className='auth-form'>
                    <p className='label'>UserName</p>
                    <input className='input-field' type="text" onChange={e => setUsername(e.target.value)} required placeholder='JohnDoe'/>
                    <p className='label'>PassWord</p>
                    <input className='input-field' type="password" onChange={e => setPassword(e.target.value)} required placeholder='Please enter a strong password'/>
                    <button type="submit" className='button auth-button'>Submit</button>
                    <div>
                        <p className="switch-auth">No account? <Link to="/register">Register here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login
