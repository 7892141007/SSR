import React from 'react';
import Home from './client/comps/Home';
// import { Route } from 'react-router-dom';
import UserList, { laodServerData } from './client/comps/UserList';

// export default () => {
//     return (
//         <div>
//             <Route exact path='/' component={Home} />
//             <Route path='/users' component={UserList} />
//         </div>
//     );
// }

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: UserList,
        laodServerData
    }
]