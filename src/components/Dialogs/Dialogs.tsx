import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Alex'} id={1}/>
                <DialogItem name={'Denis'} id={2}/>
                <DialogItem name={'Yulya'} id={3}/>
                <DialogItem name={'Dima'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Cool'}/>
                <Message message={'Cool'}/>
            </div>
        </div>
    )
}

export default Dialogs