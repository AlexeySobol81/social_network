import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Button, TextField} from "@material-ui/core";
import Post from "./posts/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/pfofileReducer";
import {ActionsTypes, PostType} from "../../../redux/store";

type PostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(updateNewPostTextAC(''))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="enter your post"
                        variant="outlined"
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div className={s.Button}>
                    <Button
                        onClick={addPost}
                        variant="contained" color="primary">
                        Add post
                    </Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;