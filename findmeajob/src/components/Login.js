import Axios from 'axios';
import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';



const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();


    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default Login
