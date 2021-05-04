import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialDialogPageStateType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReucer";
import {Button, TextField} from "@material-ui/core";
import {ActionsTypes} from "../../redux/reduxStore";

type DialogsPagePropsType = {
    state: InitialDialogPageStateType
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}

const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let sendMessage = () => {
        props.dispatch(sendMessageAC(props.newMessageText))
        props.dispatch(updateNewMessageTextAC(''))
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
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