import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import "../styles/Login.css";

function LoginPage() {
    const {login} = useContext(AuthContext);

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    "username": userName,
                    "password": password,
                });
            console.log(response)
            login(response);

            history.push("/profile")
        } catch (e) {
            console.error(e.response);


        }
    }

    return (

        <div class="login">

            <h1>Login</h1>

            <form onSubmit={handleSubmit} className="search-form auth-form">

                <label htmlFor="login-username">
                    Username:
                    <input
                        type="text"
                        id="login-username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                        placeholder="Fill in your username"
                    />
                    {userName.length < 6 && <p className="error">Your username isn't long enough</p>}
                    {userName.length >= 6 && <p className="good">Your username is long enough</p>}
                </label>


                <label htmlFor="login-password">
                    Password:
                    <input
                        type="password"
                        id="login-password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Fill in your password"
                    />
                    {password.length < 6 && <p className="error">Your password isn't long enough</p>}
                    {password.length >= 6 && <p className="good">Your password is long enough</p>}
                </label>




                <button type="submit">Login</button>
            </form>

            <p>Heeft u geen account? <Link to="/signup">Signup</Link> dan.</p>

        </div>

    );
}

export default LoginPage;