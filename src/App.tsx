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
import {StoreType} from "./redux/store";
import Friends from "./components/Friends/Friends";

type RootStatePropsType = {
    store: StoreType
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
                               state={props.store._state.dialogsPage}
                               dispatch={props.store.dispatch.bind(props.store)}
                               newMessageText={props.store._state.dialogsPage.newMessageText}
                           />}/>
                    <Route path={'/profile'}
                           render={() => <Profile
                               state={props.store._state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}
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
