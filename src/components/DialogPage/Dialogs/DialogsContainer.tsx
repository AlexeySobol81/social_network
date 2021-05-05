import React from 'react'
import {sendMessageAC, updateNewMessageTextAC}
    from "../../../redux/dialogsReucer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let sendMessage = () => {
                        store.dispatch(sendMessageAC())
                    }
                    let onMessageChange = (text: string) => {
                        let action = updateNewMessageTextAC(text)
                        store.dispatch(action)
                    }

                    return (<Dialogs
                        sendMessage={sendMessage}
                        newMessageText={store.getState().dialogsPage.newMessageText}
                        onMessageChange={onMessageChange}
                        dialogs={store.getState().dialogsPage.dialogs}
                        messages={store.getState().dialogsPage.messages}
                    />)
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer