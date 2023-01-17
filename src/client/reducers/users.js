import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS } from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};