import {addPostActionCreator, writePostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        textField: state.profilePage.newPost,
        posts: state.profilePage.posts
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        writePost: (text) => dispatch(writePostActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
