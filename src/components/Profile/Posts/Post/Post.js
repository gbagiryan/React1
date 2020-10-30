import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <p className={classes.post}> {props.content}</p>
    )
};

export default Post;