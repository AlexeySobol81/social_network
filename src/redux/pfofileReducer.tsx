import React from 'react'
import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPost,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }

    return state
}

export const addPostAC = (newPost: string) => ({type: ADD_POST, newPost: newPost}) as const
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer