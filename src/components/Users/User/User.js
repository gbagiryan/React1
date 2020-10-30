import React from "react";
import classes from "./User.module.css";
import defaultPhoto from '../../../assets/images/noAvatar.png'

const User = (props) => {
    return (
        <div className={classes.user}>

            <img className={classes.avatar} alt={'avatar'}
                 src={props.user.photos.small != null ? props.user.photos.small : defaultPhoto}/>
            {props.user.name}
            {props.user.status}

            <button onClick={() => props.follow(props.user.id)}>{props.user.followed ? 'unfollow' : 'follow'}</button>
        </div>
    )
};

export default User;