import React from 'react';
import s from './MyPosts.module.css';
import {Button, TextField} from "@material-ui/core";
import Post from "./posts/Post";
import {PostType} from "../../../redux/state";

type PostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField id="outlined-basic" label="enter your post" variant="outlined"/>
                </div>
                <div className={s.Button}>
                    <Button variant="contained" color="primary">
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