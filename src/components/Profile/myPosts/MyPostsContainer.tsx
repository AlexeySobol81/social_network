import React from 'react';
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/pfofileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {InitialStateType} from "../../../redux/reduxStore";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
let mapStateToProps = (state: InitialStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type MapDispatchPropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onPostChange: (text: string) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export type MyPostContainerPropsType = MapStatePropsType & MapDispatchPropsType

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;