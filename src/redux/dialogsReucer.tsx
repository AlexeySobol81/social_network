import React from 'react'
import {ActionsTypes} from "./reduxStore";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type InitialDialogPageStateType = typeof initialState
type UpdateNewMessageTextACType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}
type SendMessageACType = {
    type: typeof SEND_MESSAGE
    newMessage: string
}

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

const initialState = {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Denis'},
            {id: 3, name: 'Yulya'},
            {id: 4, name: 'Dima'},
        ] as Array<DialogType>,
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Cool'},
            {id: 4, message: 'Cool'},
        ] as Array<MessageType>,
        newMessageText: '' as string
    }

const dialogsReducer  = (state: InitialDialogPageStateType = initialState, action: ActionsTypes): InitialDialogPageStateType => {
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

export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextACType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}
export const sendMessageAC = (newMessage: string): SendMessageACType => {
    return {
        type: SEND_MESSAGE,
        newMessage: newMessage
    } as const
}

export default dialogsReducer