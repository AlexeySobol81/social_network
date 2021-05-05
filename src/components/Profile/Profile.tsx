import React from 'react';
import ProfileInfo from "./myPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";



const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;