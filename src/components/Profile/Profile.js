import React from 'react';
import classes from './Profile.module.css';
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <Avatar/>
            <Info/>
            <PostsContainer store={props.store}/>
        </div>
    )
};

export default Profile;