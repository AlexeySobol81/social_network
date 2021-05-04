import React from 'react'
import {ActionsTypes} from "./reduxStore";

export type FriendType = {
    id: number
    name: string
}
export type InitialSidebarStateType = typeof initialState

const initialState = {
    friends: [
        {id: 1, name: 'Denis'},
        {id: 2, name: 'Yulya'},
        {id: 3, name: 'German'},
    ] as Array<FriendType>
}

const sidebarReducer  = (state: InitialSidebarStateType = initialState, action: ActionsTypes): InitialSidebarStateType => {
    return state
}

export default sidebarReducer