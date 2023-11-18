import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [token, setToken] = useState();

    const login = async(credentials) => {
        fetch('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => {
            // check if the response is ok (status code 200-299)
            if (data.ok) {
                console.log(data);
                // parse the JSON response
                setToken(data);
            } else {
                // throw an error with the status code and text
                throw new Error(`${data.status} ${data.statusText}`);
            }
        })
    }

    const register = async(credentials) => {
        fetch('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => {
            // check if the response is ok (status code 200-299)
            if (data.ok) {
                console.log(data);
                // parse the JSON response
                setToken(data);
            } else {
                // throw an error with the status code and text
                throw new Error(`${data.status} ${data.statusText}`);
            }
        })
    }
  

    const logout = () => {
        setToken(null);
    }

    const contextData = {
        token: token,
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
