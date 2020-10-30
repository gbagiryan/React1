import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {
    let textField = props.textField;

    const writePost = (e) => {
        props.writePost(e.target.value);
    };
    let addPost = () => {
        props.addPost();
    };

    let posts = props.posts.map(post => <Post content={post.content} key={post.id}/>);

    return (
        <div className={classes.posts}>
            <textarea onChange={writePost} value={textField}></textarea>
            <button onClick={addPost}>Add</button>
            {posts}
        </div>
    )
};

export default Posts;