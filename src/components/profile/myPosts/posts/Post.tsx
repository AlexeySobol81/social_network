import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={'ava.jpg'}/>
                Post1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;