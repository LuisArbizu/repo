import AddComment from "./AddComment";
import React from "react";

const Comments = ({ commentInfo }) => {
    const {username, description} = commentInfo;

    return(
        <div>
            <span> {username} </span>
            <span> {description} </span>
        </div>
    );
}

export default Comments;