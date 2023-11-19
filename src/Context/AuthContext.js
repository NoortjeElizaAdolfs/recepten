import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [token, setToken] = useState(null);
    const [errorMessage, setErrorMessage] = useState(); 

    const login = async (credentials) => {
        try {
            const response = await fetch('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                // Parse the JSON response
                const data = await response.json();
                setToken(data.accessToken);
            } else {
                setToken(null);
                // Handle specific error cases (e.g., 401 Unauthorized)
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            return setErrorMessage("Login mislukt controleer gebruikersnaam en wacthwoord");
        }
    };


    const register = async (credentials) => {
        try {
            const response = await fetch('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                // Parse the JSON response
                const data = await response.json();
                setToken(data.accessToken);
            } else {
                setToken(null);
                // Handle specific error cases (e.g., 401 Unauthorized)
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            setToken(null);
            return setErrorMessage("Sorry er is iets fout gegaan.");
        }
    };
  

    const logout = () => {
        setToken(null);
    }

    const contextData = {
        token: token,
        errorMessage: errorMessage,
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
