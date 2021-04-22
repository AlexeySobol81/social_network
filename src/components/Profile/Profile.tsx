import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./myPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePagePropsType = {
    state: ProfilePageType
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;