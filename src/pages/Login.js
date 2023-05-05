import React, {useContext, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import styles from "../styles/Login.css";
import {AuthContext} from "../context/AuthContext";

function LoginPage() {
    const {login} = useContext(AuthContext);

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    "username": userName,
                    "password": password,
                });

            login(response);

           return <Navigate to="/profile" replace={true} />
        } catch (e) {
            console.error(e.response);


        }
    }

    return (

        <>

            <form onSubmit={handleSubmit} className={styles["layout"]}>

                <label htmlFor="login-username" className={styles["label"]}>
                    Username:
                    <input
                        className={styles["label"]}
                        type="text"
                        id="login-username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={userName}
                        placeholder="Fill in your username"
                    />
                    {userName.length < 6 && <p className={styles["error"]}>Your username isn't long enough</p>}
                    {userName.length >= 6 && <p className={styles["good"]}>Your username is long enough</p>}
                </label>


                <label htmlFor="login-password" className={styles["label"]}>
                    Password:
                    <input
                        className={styles["label"]}
                        type="password"
                        id="login-password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Fill in your password"
                    />
                    {password.length < 6 && <p className={styles["error"]}>Your password isn't long enough</p>}
                    {password.length >= 6 && <p className={styles["good"]}>Your password is long enough</p>}
                </label>




                <button type="submit" className={styles["button"]}>Login</button>
            </form>

            <p>Heeft u geen account? <Link to="/signup">Signup</Link> dan.</p>

        </>

    );
}

export default LoginPage;