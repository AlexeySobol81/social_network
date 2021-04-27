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
export type AddPostActionType = {
    type: 'ADD-POST'
    newPost: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    newMessage: string
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}
export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageTextActionType

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
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.newMessage
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}

export const addPostAC = (newPost: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPost: newPost
    }
}
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}
export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    }
}
export const sendMessageAC = (newMessage: string): SendMessageActionType => {
    return {
        type: "SEND-MESSAGE",
        newMessage: newMessage
    }
}

export default store