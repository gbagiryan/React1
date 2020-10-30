import React from "react";
import classes from './Messages.module.css';
import Conversation from "./Conversation/Conversation";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    let newMessage = props.newMessage;

    const writeMessage = (e) => {
        props.writeMessage(e.target.value);
    };
    const sendMessage = () => {
        props.sendMessage();
    };

    let messages = props.messages.map((message) => <Conversation message={message.message} key={message.id}/>);
    let dialogs = props.dialogs.map((dialog) => <Dialog id={dialog.id} name={dialog.name} key={dialog.id}/>);

    return (
        <div className={classes.messages}>
            <div className={classes.dialogs}>
                {dialogs}
            </div>
            <div className={classes.conversations}>
                {messages}
                <textarea onChange={writeMessage} value={newMessage}
                          className={classes.writeMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Messages;