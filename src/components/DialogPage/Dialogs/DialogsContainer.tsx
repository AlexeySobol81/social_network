import React from 'react'
import {DialogType, MessageType, sendMessageAC, updateNewMessageTextAC}
    from "../../../redux/dialogsReucer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {InitialStateType} from "../../../redux/reduxStore";


type MapStatePropsType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

let mapStateToProps = (state: InitialStateType): MapStatePropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

type MapDispatchPropsType = {
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onMessageChange: (text: string) => {
            let action = updateNewMessageTextAC(text)
            dispatch(action)
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export type DialogsContainerPropsType = MapStatePropsType & MapDispatchPropsType

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer