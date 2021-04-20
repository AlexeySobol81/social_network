import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'111.png'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}

export default ProfileInfo;