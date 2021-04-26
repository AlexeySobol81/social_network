import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {RootStateType} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
