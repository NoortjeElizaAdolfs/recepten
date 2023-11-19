import React, { useState, useContext } from 'react'
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";

const Register = () => {
    const { register } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        register({
            "username": username,
            "email": email,
            "password": password,
            "role": [role]
        })
        navigate("/login")
    }
  return (
    <>
    <main className='container auth'>
        <section className='fb-item'>
            <h1 className='title'>Register Here</h1>
        </section>
        <section className='fb-item'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <p className='text-white font-bold'>UserName</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} required className='p-3 my-2 rounded text-black' placeholder='JohnDoe'/>
                    <p className='text-white font-bold'>PassWord</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} required className='p-3 my-2 rounded text-black' placeholder='Please enter a strong password'/>
                    <p className='text-white font-bold'>Email</p>
                    <input type="email" onChange={e => setEmail(e.target.value)} required className='p-3 my-2 rounded text-black' placeholder='example@email.com'/>
                    <p className='text-white font-bold'>Role</p>
                    <select onChange={e => setRole(e.target.value)} required className='p-3 my-2 rounded text-black'>
                        <option value="">Select role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                <button type="submit" className='bg-red-700 py-3 my-6 rounded font-bold px-4'>Submit</button>
                <div>
                    <p className="switch-auth">Allready have an account? <Link to="/login">Login here</Link></p>
                </div>
            </form>
        </section>
    </main>
    </>
  )
}

export default Register
