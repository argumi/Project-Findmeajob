import Axios from 'axios';
import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';



const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();


    return (
        isAuthenticated && (
            <button onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default Logout
