import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogPageType} from "../../redux/store";
import {Button, Icon, TextField} from "@material-ui/core";
import classes from "*.module.css";

type DialogsPagePropsType = {
    state: DialogPageType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let sendMessage = () => {
        props.dispatch({type: "SEND-MESSAGE", newMessage: props.newMessageText})
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: ''})
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: (e.currentTarget.value)})
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