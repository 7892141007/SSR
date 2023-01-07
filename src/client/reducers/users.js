import { FETCH_USERS_SUCCESS } from "../actions";

export default (state = [], action) => {
    console.log('$$$ reducer', action.type);
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            console.log('$$ FETCH_USERS_SUCCESS reducer');
            return action.payload.data;
        case FETCH_USERS_FAILURE:
            console.log('$$ FETCH_USERS_FAILURE reducer');
            return  action.payload;
        default:
            return state;
    }
};