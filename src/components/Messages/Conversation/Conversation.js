import React from "react";
import classes from './Conversation.module.css'

const Conversation = (props) => {
    return (
        <div className={classes.conversation}>
            {props.message}
        </div>
    );
};

export default Conversation;