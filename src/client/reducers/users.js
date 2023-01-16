import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return action.payload.data;
        case FETCH_USERS_FAILURE:
            return  action.payload;
        default:
            return state;
    }
};