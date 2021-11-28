import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { whoami } from "../services/Services";
import { toast, ToastContainer } from "react-toastify";
import Redirect from "./Redirect";
import PostContainer from "../components/PostContainer";
import PostForm from "../components/PostForm";

const Main = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    useEffect(() => {
        const authUser = async () => {
            try {
                const response = await whoami(token);
                setUser(response.username);
            } catch (error) {
                navigate('/');
            }
        }

        authUser();
    }, []);

    function logout () {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    }
    

    if (user === undefined) return <Redirect />;
    

    return (
        <div className="flex flex-col justify-items-center bg-gray-600 items-center space-y-6">
            <ToastContainer />
            <div className="flex flex-row justify-around w-full items-center">
                <h1 className="text-2xl text-white font-bold"> Bienvendido @{user} </h1>
                <button className ="text-white p-4 bg-purple-800 rounded-xl" onClick={logout} > Cerrar sesion </button>
            </div>
            {/* Le pasamos el user como propiedad al PostContainer */}
            {role === "admin" && <PostForm/>}
            <PostContainer username = {user} /> 
        </div>
    );
};

export default Main;