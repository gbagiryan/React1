import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.element}>
                <a href="/#">home</a>
            </div>
            <div className={classes.element}>
                <a href="/#">info</a>
            </div>
            <div className={classes.element}>
                <a href="/#">contact</a>
            </div>
        </div>
    )
};

export default Header;