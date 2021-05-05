import React from 'react'
import {
    DialogType,
    MessageType,
    sendMessageAC,
    updateNewMessageTextAC
}
from "../../../redux/dialogsReucer";
import {ActionsTypes} from "../../../redux/reduxStore";
import Dialogs from "./Dialogs";

type DialogsPageContainerPropsType = {
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const DialogsContainer = (props: DialogsPageContainerPropsType) => {

    let sendMessage = () => {
        props.dispatch(sendMessageAC())
    }
    let onMessageChange = (text: string) => {
        let action = updateNewMessageTextAC(text)
        props.dispatch(action)
    }

    return (
        <Dialogs
            sendMessage={sendMessage}
            newMessageText={props.newMessageText}
            onMessageChange={onMessageChange}
            dialogs={props.dialogs}
            messages={props.messages}
        />
    )
}

export default DialogsContainer