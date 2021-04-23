import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,
    RootStateType,
    sendMessage,
    updateNewMessageText,
    updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                sendMessage={sendMessage}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

