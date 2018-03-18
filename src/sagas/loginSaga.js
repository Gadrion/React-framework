import * as loginActions from '../modules/loginModule';
import { take, call, put } from 'redux-saga/effects'
import axios from 'axios';

// const loginURL = axios.post('/url', data);

 export default function * asyncLoginSaga() {
    while(true) {
        const action = yield take(loginActions.LOGIN);
        console.log(action);
        yield put(loginActions.loginPendding(true));
        try {
            const result = yield axios.post('/url', action.payload);
            console.log('result', result);
        } catch(e) {
            console.log('result', e);
        }
        
        // const { payload, error } = yield call(loginURL, action.payload);
        // if( payload && !error ) {
        //     yield put(loginActions.loginSuccess({pendding: false, isLogin: true}));
        // } else {
        //     yield put(loginActions.loginFailure({pendding: false, error: true, isLogin: false}));
        // }
    }
};