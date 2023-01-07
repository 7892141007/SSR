// import Axios from "axios";

export const FETCH_USERS = 'fetch_users';
export const FETCH_USERS_SUCCESS = 'fetch_users_success';
export const FETCH_USERS_FAILURE = 'fetch_users_failure';


// export const fetchUsers = async dispatch =>  {
//     const res = await Axios.get('http://react-ssr-api.herokuapp.com/users');
//     console.log('$$ res', res);
//     console.log('$$$ dispatching dispatch', dispatch);

//     dispatch({
//         type: FETCH_USERS,
//         payload: res
//     });
// };

export const fetchUsers = () => ({ type: FETCH_USERS });

export const fetchUsersSuccess = (data) => ({ type: FETCH_USERS_SUCCESS, payload: data });

export const fetchUsersFailure = (data) => ({ type: FETCH_USERS_FAILURE, payload: data });