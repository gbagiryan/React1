import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

export const store = {
    _state: {
        profilePage: {
            posts: [
                {content: "1some random text"},
                {content: "2some random text"},
                {content: "3some random text"},
                {content: "4some random text"},],
            newPost: ''
        },
        messagesPage: {
            messages: [
                {message: "1some random text"},
                {message: "2some random text"},
                {message: "3some random text"},
                {message: "4some random text"},],
            dialogs: [
                {id: 1, name: "Alice"},
                {id: 2, name: "John"},
                {id: 3, name: "Paul"},
                {id: 4, name: "Kurt"}],
            newMessage: ''
        },
        sidebarNavigation: {
            friends: [
                {
                    avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
                    name: 'John'
                },
                {
                    avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
                    name: 'Alice'
                },
                {
                    avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
                    name: 'Kevin'
                },
                {
                    avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
                    name: 'James'
                }]
        }
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.sidebarNavigation, action);
        this._callSubscriber();
    }
};