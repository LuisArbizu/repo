import React from "react";
import axios from "axios";
import { useState } from "react";

const AddComment = ({ post }) => {
    const [valueInput, setValue] = useState('');

    function onChange(e) {
        setValue(e.target.value);
    }


    return (
        <form>
            <input className="bg-red-500 p-9 "placeholder="Ingresa tu comenrario" minLength="8" type="text"  onChange= {onChange} value={valueInput}/>
        </form>
    );
}

export default AddComment;