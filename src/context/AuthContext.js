import React, {createContext, useState} from 'react';
import {Navigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null
    });

    function login() {
        toggleIsAuth({
            ...isAuth, isAuth: true
        });
        <Navigate to="/profile" replace={true} />
    }

    function logout() {
        toggleIsAuth(
            {
                ...isAuth,
                isAuth: false,
                user: null,
            });
            <Navigate to="/" replace={true} />
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;