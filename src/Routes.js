import React from 'react';
import Home from './client/comps/Home';
import { Route } from 'react-router-dom';
import UserList from './client/comps/UserList';

export default () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/users' component={UserList} />
        </div>
    );
}