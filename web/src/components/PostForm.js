import axios from "axios";
import React from "react";

const PostForm = () => {
    const token = localStorage.getItem('token');

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const bodyForm = Object.fromEntries(formData.entries());

        try {
            let response = await axios.post('https://posts-pw2021.herokuapp.com/api/v1/post/create', bodyForm, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(response.status === 201) {
                alert('Post creado con exito');
                window.location.reload();
            }

        } catch (error) {
            
        }

    };

    return (
        <main>
            <form onSubmit={onSubmitHandler} className="flex flex-col bg-red-200 p-6 rounded-lg items-center">
                <h1> Crear Post </h1>
                <label> Titulo del post </label>
                <input name="title" id="title" type="text" required minLength="8" maxLength="32" />
                <label> Descripcion </label>
                <input name="description" id="description" type="text" required minLength="8" />
                <label> Imagen </label>
                <input name="image" id="image" type="text" required />
                <button type = "submit" className="bg-blue-500 text-white p-4"> Subir </button>
            </form>
        </main>
    );
};

export default PostForm;