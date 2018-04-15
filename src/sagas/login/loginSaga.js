import * as loginActions from '../../modules/login/loginModule';
import { take, put } from 'redux-saga/effects'
import axios from 'axios';

// const loginURL = axios.post('/url', data);
const loginURL = '/login';

 export default function * asyncLoginSaga() {
    while(true) {
        const action = yield take(loginActions.LOGIN);
        console.log(action);
        yield put(loginActions.loginPendding(true));
        try {
            const result = yield axios.post(loginURL, action.payload);
            console.log('Login Success: ', result);
            axios.defaults.headers = {
                ...axios.defaults.headers,
                'x-access-token': result.data.token
            }
            sessionStorage.setItem('userid', action.payload.userid);
            sessionStorage.setItem('token', result.data.token);
            yield put(loginActions.loginSuccess({pendding: false, isLogin: true}));
        } catch(e) {
            console.log('Login Failed: ', e);
            yield put(loginActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};