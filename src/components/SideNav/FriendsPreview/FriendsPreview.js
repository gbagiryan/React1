import React from "react";
import classes from "./FriendsPreview.module.css";

const FriendsPreview = (props) => {
    return (
        <div className={classes.friend}>
            <img className={classes.avatar} src={props.avatar} alt={'avatar'}/>

            <div className={classes.name}>
                {props.name}
            </div>
        </div>
    );
};

export default FriendsPreview;