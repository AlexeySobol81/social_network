import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src={'111.png'}/>
            </div>
            <div>
                ava+discription
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;