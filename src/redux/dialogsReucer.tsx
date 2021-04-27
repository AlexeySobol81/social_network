import React from 'react'
import {ActionsTypes, DialogPageType, MessageType} from "./store";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer  = (state: DialogPageType, action: ActionsTypes) => {
    switch (action.type){
        case "SEND-MESSAGE":
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.newMessage
            }
            state.messages.push(newMessage)
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state
        default:
            return state
    }

    return state
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}
export const sendMessageAC = (newMessage: string) => {
    return {
        type: SEND_MESSAGE,
        newMessage: newMessage
    } as const
}

export default dialogsReducer