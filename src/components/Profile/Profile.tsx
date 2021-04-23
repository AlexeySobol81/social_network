import React from 'react';
import s from './Profile.module.css';
import  MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./myPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePagePropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;