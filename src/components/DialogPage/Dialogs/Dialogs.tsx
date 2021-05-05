import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType}
from "../../../redux/dialogsReucer";
import {Button, TextField} from "@material-ui/core";

type DialogsPagePropsType = {
    newMessageText: string
    sendMessage: () => void
    onMessageChange: (text: string) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    let sendMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.dialogsItems}>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="enter your message"
                        variant="outlined"
                        onChange={onMessageChange}
                        value={props.newMessageText}
                    />
                </div>
                <div className={s.Button}>
                    <Button
                        onClick={sendMessage}
                        variant="contained"
                        color="primary">
                        Send message
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs