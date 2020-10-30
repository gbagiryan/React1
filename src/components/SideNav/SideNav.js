import React from 'react';
import classes from './SideNav.module.css'
import {NavLink} from "react-router-dom";
import FriendsPreview from "./FriendsPreview/FriendsPreview";

const SideNav = (props) => {
    let friends = props.friends.map((friend) => <FriendsPreview avatar={friend.avatar} name={friend.name} key={friend.id}/>);

    return (
        <div className={classes.sidenav}>
            <div>
                <NavLink to="/profile" activeClassName={classes.active} className={classes.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={classes.active}
                         className={classes.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={classes.active}
                         className={classes.item}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/friends" activeClassName={classes.active} className={classes.item}>Friends</NavLink>
                <div className={classes.friendsDisplay}>
                    {friends}
                </div>
            </div>
        </div>
    );
};

export default SideNav;