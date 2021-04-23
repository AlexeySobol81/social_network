import React from 'react';
import s from './Post.module.css';

type PostMessageType = {
    message: string
    likesCount: number
}

const Post = (props: PostMessageType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={'ava.jpg'}/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;