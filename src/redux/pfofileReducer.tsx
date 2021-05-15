import React from 'react'
import {ActionsTypes} from "./reduxStore";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialProfileReducerStateType = typeof initialState
type AddPostACType = {
    type: typeof ADD_POST
}
type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 150},
    ] as Array<PostType>,
    newPostText: '' as string
}

const profileReducer = (state: InitialProfileReducerStateType = initialState, action: ActionsTypes): InitialProfileReducerStateType => {
    switch (action.type) {

        case 'ADD-POST':
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
    return state
}

export const addPostAC = (): AddPostACType => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextACType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer