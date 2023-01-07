import { combineReducers } from "redux";
import usersReducer from './users';

export default function () {
    return combineReducers({
        users: usersReducer
    });
};