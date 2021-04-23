import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";
import Friends from "./components/Friends/Friends";

type RootStatePropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    sendMessage: (textMessage: string) => void
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newText: string) => void
}

const App = (props: RootStatePropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               state={props.state.dialogsPage}
                               sendMessage={props.sendMessage}
                               updateNewMessageText={props.updateNewMessageText}
                               newMessageText={props.state.dialogsPage.newMessageText}
                           />}/>
                    <Route path={'/profile'}
                           render={() => <Profile
                               state={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
