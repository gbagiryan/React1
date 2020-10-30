const WRITE_MESSAGE = 'WRITE_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: "1some random text"},
        {id: 2, message: "2some random text"},
        {id: 3, message: "3some random text"},
        {id: 4, message: "4some random text"},],
    dialogs: [
        {id: 1, name: "Alice"},
        {id: 2, name: "John"},
        {id: 3, name: "Paul"},
        {id: 4, name: "Kurt"}],
    newMessage: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_MESSAGE:
            return {
                ...state,
                newMessage: action.messageText
            };

        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 0, message: state.newMessage}],
                newMessage: ''
            };

        default:
            return state;
    }
};

export default messagesReducer;
export const writeMessageActionCreator = (messageText) => ({type: WRITE_MESSAGE, messageText: messageText});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});