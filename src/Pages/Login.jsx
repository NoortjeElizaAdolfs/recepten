import React, {useState, useContext} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";
import ErrorBox from '../Components/ErrorBox';

const Login = () => {
    const { login,token,errorMessage } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // call the loginUser function and await for the result
            login({
                "username": username,
                "password": password
            })
            // set the token in the state
            if(token !== null) {
                navigate("/");
            }
        } catch (error) {
            // log the error message
            console.error(error.message);
        }
    }
  return (
    <>
        <main className='container auth'>
            <section className='fb-item'>
                <h1 className='auth-title'>Log In Here</h1>
            </section>
            <section className='fb-item'>
                <form onSubmit={handleSubmit} className='auth-form'>
                    <p className='label'>UserName</p>
                    <input className='input-field' type="text" onChange={e => setUsername(e.target.value)} required placeholder='JohnDoe'/>
                    <p className='label'>PassWord</p>
                    <input className='input-field' type="password" onChange={e => setPassword(e.target.value)} required placeholder='Please enter a strong password'/>
                    <button type="submit" className='button auth-button'>Submit</button>
                    {errorMessage?<ErrorBox message={errorMessage} />:null}
                    <div>
                        <p className="switch-auth">No account? <Link to="/register">Register here</Link></p>
                    </div>
                </form>
            </section>
        </main>
    </>
  )
}

export default Login
