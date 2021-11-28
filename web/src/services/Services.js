import React from "react";
import axios from "axios";

export const signIn = async (username, password) => {
    const response = await axios.post('https://posts-pw2021.herokuapp.com/api/v1/auth/signin', { username, password });
    return response;
};

export const whoami = async (token) => {
    const responseWho = await axios.get('https://posts-pw2021.herokuapp.com/api/v1/auth/whoami', 
    {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    return responseWho.data;
}