import Axios from "axios";
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, FETCH_USERS } from '../actions/index';

const getUsersAPI = () => {
    return Axios.get('http://react-ssr-api.herokuapp.com/users');
}

function* fetchUsers() {
    const res = yield call(getUsersAPI);
    console.log('$$$ res', res);
    if (res.status === 200) {
        console.log('$$$ 200');
        yield put(fetchUsersSuccess(res));
    } else {
        yield put(fetchUsersFailure(res));
    }

}

export default function* userSaga() {
    yield takeLatest(FETCH_USERS, fetchUsers);
}