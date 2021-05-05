import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/pfofileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    let onPostChange = (text: string) => {
                        let action = updateNewPostTextAC(text)
                        store.dispatch(action)
                    }

                    return (<MyPosts
                        posts={store.getState().profilePage.posts}
                        newPostText={store.getState().profilePage.newPostText}
                        // dispatch={props.dispatch}
                        onPostChange={onPostChange}
                        addPost={addPost}
                    />)
                }
            }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer;