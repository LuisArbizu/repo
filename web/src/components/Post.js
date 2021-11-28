import { React, useState } from "react";
import axios from 'axios';
import { HiThumbUp } from "react-icons/hi";
import { FaComment } from "react-icons/fa";
import AddComment from "./AddComment";
import shortid from 'shortid';
import Comments from "./Comments";

const Post = ({ object, username }) => {

    const {
        _id, title, description, image, user, likes, comments
    } = object; // -> Destructuring
    
    const [likesNumb, setLikes] = useState(likes.length);
    const [liked, setLiked] = useState(likes.some((it) => it.username === username));
    const [comment, setComment] = useState(comments)
    async function setLike() {
        try {
            await axios.patch(`https://posts-pw2021.herokuapp.com/api/v1/post/like/${_id}`, null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if(!liked){
                setLiked(true);
                setLikes(likesNumb + 1)
            } else {
                setLiked(false);
                setLikes(likesNumb - 1);
            }
            
        } catch (error) {
            
        }
    };

    return (
        <div className="w-2/4 bg-gray-500 flex flex-col my-4 rounded-lg h-4/6">
            {/* Se le pone "?" porque el username de los demas usuarios puede ser null or undefined */}
            <div className="p-3">
                <p className="text-xl"> {_id} </p>
                <h1 className="text-white font-bold text-lg"> @{user?.username} </h1>
                <h2 className="text-base text-white font-semibold"> {title} </h2>
                <p className="text-white"> {description} </p>
            </div>
            <div>
                <img src={image} className="w-full" />
            </div>
            <div className="flex flex-wrap px-4 pt-4 pb-1 items-center w-full text-white space-x-72">
                <span>  { likesNumb } Likes </span>
                <span> {comments.length} Comentarios </span>
            </div>
            <div className="flex flex-wrap p-4 items-center">
                <div className="p-1 flex flex-row justify-center text-white w-1/2">
                    <button className={`${liked && `text-blue-600`} text-gray-100`}onClick={setLike}> 
                    <HiThumbUp size="20" className="mr-3 hover:text-blue-600" /> 
                    Like </button>

                </div>
                <div className="p-1 flex flex-row justify-center text-white w-1/2 space-x-72">
                    { comments && comment.map((it) => <Comments key={shortid.generate()} commentInfo={it}/>)}
                    <AddComment post={_id} />
                </div>
            </div>
        </div>
    );
};

export default Post;
