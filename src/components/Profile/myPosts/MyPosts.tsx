import React from 'react';
import s from './MyPosts.module.css';
import {Button, TextField} from "@material-ui/core";
import Post from "./posts/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 150},
        {id: 3, message: 'Cool', likesCount: 5},
        {id: 4, message: 'Yeah!!!', likesCount: 18}
    ]

    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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