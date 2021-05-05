import React, {ChangeEvent} from 'react';
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/pfofileReducer";
import {ActionsTypes} from "../../../redux/reduxStore";
import MyPosts from "./MyPosts";

type PostsContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: PostsContainerPropsType) => {

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.dispatch(action)
    }

    return (
        <MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
            // dispatch={props.dispatch}
            onPostChange={onPostChange}
            addPost={addPost}
        />
    )

}

export default MyPostsContainer;