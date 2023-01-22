import React from 'react';
import Home from './client/pages/Home';
import MainComp from './client/MainComp';
import UserList, {laodServerData} from './client/pages/UserList';

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
        ...MainComp,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                component: UserList,
                path: '/users',
                laodServerData
            }
        ]
    }
]

