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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
                <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;