import {sendMessageActionCreator, writeMessageActionCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessage: state.messagesPage.newMessage,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        writeMessage: (text) => dispatch(writeMessageActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;