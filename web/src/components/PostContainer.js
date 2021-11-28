import React from "react";
import Post from "./Post";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const PostContainer = ({ username }) => {
    const [PostInfo, setPostInfo] = useState({ data: null });
    const [page, setpage] = useState(0);
    const pages = useRef();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getAll = async () => {
            const { data: response } = await axios.get('https://posts-pw2021.herokuapp.com/api/v1/post/all?limit=10&page=0', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response);
            setPostInfo({ data: response.data });
            pages.current = response.pages;
        }

        getAll();
    }, []);

    useEffect(() => {
        const getAll = async () => {
            const { data: response } = await axios.get(`https://posts-pw2021.herokuapp.com/api/v1/post/all?limit=10&page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setPostInfo({ data: response.data });
            pages.current = response.pages;
        }

        getAll();
    }, [page]);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            {PostInfo.data && PostInfo.data.map((it) => <Post key={it._id} object={it} username={username} />)}
            <button className="p-4 bg-green-600 text-white"
            // ************************* CAMBIAR ******************************
                onClick={() => {
                    setpage(page - 1);
                    if (page === 0) setpage(page);
                }}> Pagina anterior </button>
            <button className="p-4 bg-green-600 text-white"
                onClick={() => {
                    setpage(page + 1);
                    if (page >= pages) {
                        setpage(page - 1);
                    }
                }}> Pagina siguiente </button>
        </div>
    );
};

export default PostContainer;