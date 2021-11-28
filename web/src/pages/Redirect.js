import React from "react";
import { HiRefresh } from "react-icons/hi";

const Redirect = () => (
    <div className="bg-gradient-to-r from-green-500 via-blue-400 to-indigo-500 w-full h-screen flex flex-col items-center justify-center space-y-6 text-white">
        <h1 className="text-4xl font-bold"> Redireccionando </h1>
        <HiRefresh size="70" className="animate-spin"/>
    </div>
);

export default Redirect;
