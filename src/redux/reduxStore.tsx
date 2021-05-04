import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, InitialProfileReducerStateType, updateNewPostTextAC} from "./pfofileReducer";
import dialogsReducer, {InitialDialogPageStateType, sendMessageAC, updateNewMessageTextAC} from "./dialogsReucer";
import sidebarReducer, {InitialSidebarStateType} from "./sidebarReducer";

export type InitialStateType = {
    profilePage: InitialProfileReducerStateType
    dialogPage: InitialDialogPageStateType
    sidebar: InitialSidebarStateType
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store  = createStore(reducers)

export type RootStoreReduxType = typeof store

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

export default store