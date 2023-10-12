import {useState} from 'react'

const useToken = () => {
    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        if(tokenString === null) {
           return null;
        } else {
            const userToken = JSON.parse(tokenString);
            return userToken?.token;
        }
    }
    const [token, setToken] = useState(getToken());
    const saveToken = (userToken) =>{
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    const removeToken = () =>{
        sessionStorage.removeItem('token');
    }

    return {
        setToken: saveToken,
        getToken,
        removeToken,
        token
    };
}

export default useToken
