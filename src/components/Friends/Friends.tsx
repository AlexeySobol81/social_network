import React from 'react';
import s from './Friends.module.css';

export const Friends = () => {
    return (
        <div className={s.container}>
            <div className={s.item}>
                <img src={'ava3.jpg'}/>
                <div>Denis</div>
            </div>
            <div className={s.item}>
                <img src={'ava2.jpg'}/>
                <div>Yulya</div>
            </div>
            <div className={s.item}>
                <img src={'ava4.jpg'}/>
                <div>German</div>
            </div>
        </div>
    )
}

export default Friends