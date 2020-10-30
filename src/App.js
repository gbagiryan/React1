import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import './App.css';
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import SideNavContainer from "./components/SideNav/SideNavContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <SideNavContainer/>
            <div className='app-wrapper-content'>
                <Route path="/profile"
                       render={() => <Profile/>}/>
                <Route path="/messages"
                       render={() => <MessagesContainer/>}/>
                <Route path="/users"
                       render={() => <UsersContainer/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
