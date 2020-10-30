const WRITE_POST = 'WRITE_POST';
const ADD_POST = 'ADD_POST';

let initialState = {
    posts: [
        {id: 1, content: "1some random text"},
        {id: 2, content: "2some random text"},
        {id: 3, content: "3some random text"},
        {id: 4, content: "4some random text"},],
    newPost: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_POST:
            return {
                ...state,
                newPost: action.postText
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 0, content: state.newPost}],
                newPost: ''
            };
        default:
            return state;
    }
};

export default profileReducer;

export const writePostActionCreator = (postText) => ({type: WRITE_POST, postText: postText});
export const addPostActionCreator = () => ({type: ADD_POST});