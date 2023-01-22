import React from 'react'; 
import Header from './comps/Header';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';

const MainComponent = ({ route }) => {
    return (
    <div>
     <Header />
     {renderRoutes(route.routes)}
    </div>
    );
};

function laodServerData(store) {
    console.log('load the auth status');
    return store.dispatch(fetchCurrentUser());
};

export default {
    component: MainComponent,
    laodServerData
};