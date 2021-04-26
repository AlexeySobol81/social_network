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
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
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
        ],
        newPostText: ''
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
        ],
        newMessageText: ''
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Denis'},
            {id: 2, name: 'Yulya'},
            {id: 3, name: 'German'},
        ]
    }
}

export let addPost = () => {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
export let  sendMessage = () => {
    let newMessage: MessageType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state)

}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export let updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}

let rerenderEntireTree = (state: RootStateType) => {
    console.log('State change')
}

export const subscribe = (observer: (state: RootStateType)=>void) => {
    rerenderEntireTree = observer
}

export default state