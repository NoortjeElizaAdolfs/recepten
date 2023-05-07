import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import "../styles/Signup.css"

function Signup() {
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setRole] = useState('');

    const history = useHistory()


    async function SignUpUser(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    "username": userName,
                    "email": email,
                    "password": password,
                    "role": [user]
                });
            console.log(response)

            history.push("/login")
        } catch (e) {
            console.error(e);

        }
    }


    return (

        <div class="signup">

            <form onSubmit={SignUpUser} className="search-form auth-signup-form">
                <label htmlFor="email" className="form-group-signup">
                    Email:
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Fill in your email"
                    />
                </label>
                <label htmlFor="username" className="form-group-signup">
                    Username:
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                        placeholder="Fill in your username"
                    />
                    {userName.length < 6 && <p className="error">Your username isn't long enough</p>}
                    {userName.length >= 6 && <p className="good">Your username is long enough</p>}
                </label>
                <label htmlFor="password" className="form-group-signup">
                    Password:
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Your password"
                    />
                    {password.length < 6 && <p className="error">Your password isn't long enough</p>}
                    {password.length >= 6 && <p className="good">Your password is long enough</p>}

                </label>

                <label htmlFor="role" className="form-group-signup">
                    Role:
                    <input
                        type="text"
                        id="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={user}
                        placeholder="user or admin"
                    />
                </label>

                <button type="submit">Register</button>
            </form>


        </div>

    );
}

export default Signup;