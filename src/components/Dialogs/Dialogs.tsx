import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Denis
                </div>
                <div className={s.dialog}>
                    Yulya
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Cool</div>
            </div>
        </div>
    )
}

export default Dialogs