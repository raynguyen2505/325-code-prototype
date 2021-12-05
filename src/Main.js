/**
 author: ZJendex
 Date: 11/20/2021
 Location: Amherst MA
 **/

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/signup' component={Signup}/>
        </Switch>
    );
}

export default Main;