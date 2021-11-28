import { React, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
import { signIn } from "../services/Services";

const Login = () => {

    const username = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

    async function onSubmitInfo(e) {
        e.preventDefault();

        const inputUsername = username.current.value;
        const inputPassword = password.current.value;

        try {
            const response = await signIn(inputUsername,inputPassword);
            
            if(response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.role);

                navigate('/main')   
            }
        } catch (error) {
            const { response } = error
            
            if(response.status === 404) toast('El usuario no existe', { type: 'error' });
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-400">
            <ToastContainer />
            <main className="w-3/4 max-w-3xl bg-blue-100 rounded-md p-8 md:p-10 shadow-md" >
                <form className="flex flex-col gap-4 items-center justify-center" onSubmit={onSubmitInfo}>
                    <h1 className="text-2xl font-bold"> Inicio de sesion </h1>
                    <input type="text" required placeholder="Ingrese su usuario" className="rounded-lg p-4 text-xl" ref={username}/>
                    <input type="password" required placeholder="Ingrese su contraseña" className="rounded-lg p-4 text-xl" ref={password}/>


                    <button className="mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Sign In </button>
                </form>
            </main>
        </div>
    );
}

export default Login;