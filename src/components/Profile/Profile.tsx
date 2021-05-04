import React from 'react';
import s from './Profile.module.css';
import  MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./myPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/reduxStore";
import {InitialProfileReducerStateType} from "../../redux/pfofileReducer";


type ProfilePagePropsType = {
    state: InitialProfileReducerStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;