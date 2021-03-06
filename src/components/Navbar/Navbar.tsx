import React from 'react';
import s from './Navbar.module.css';
import {NavLink, Route} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/Profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/DialogPage'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/News'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <div className={s.itemFriends}>
                    <NavLink to={'/Friends'} activeClassName={s.activeLink}>Friends</NavLink>
                    <Route render={() => <Friends/>}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;