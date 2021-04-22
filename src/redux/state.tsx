import React from 'react'

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type FriendType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {
    friends: Array<FriendType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 150},
            {id: 3, message: 'Cool', likesCount: 5},
            {id: 4, message: 'Yeah!!!', likesCount: 18},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Denis'},
            {id: 3, name: 'Yulya'},
            {id: 4, name: 'Dima'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Cool'},
            {id: 4, message: 'Cool'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Denis'},
            {id: 1, name: 'Yulya'},
            {id: 1, name: 'German'},
        ]
    }
}

export default state