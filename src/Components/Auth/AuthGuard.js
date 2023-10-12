import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useToken from "./useToken";

const AuthGuard = ({ children }) => {
    const token= useToken();
    const location = useLocation();

    console.log(token.getToken())

    if (token.getToken() === null) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <>{children}</>;
};

export default AuthGuard;
