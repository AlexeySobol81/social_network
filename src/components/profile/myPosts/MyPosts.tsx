import React from 'react';
import s from './MyPosts.module.css';
import {Button, TextField} from "@material-ui/core";
import Post from "./posts/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <TextField id="outlined-basic" label="enter your post" variant="outlined"/>
                <Button variant="contained" color="primary">
                    Add post
                </Button>
            </div>
            <div className={s.posts}>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;