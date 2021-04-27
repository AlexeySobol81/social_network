import React from 'react'
import profileReducer, {addPostAC, updateNewPostTextAC} from "./pfofileReducer";
import dialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogsReucer";
import sidebarReducer from "./sidebarReducer";

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
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    addPost: () => void
    sendMessage: () => void
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newText: string) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 150},
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
    },
    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber()
    },
    sendMessage() {
        let newMessage: MessageType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._callSubscriber()

    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber()
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

export default store