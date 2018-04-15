import * as langActions from '../../modules/common/langModule';
import { take, call, put } from 'redux-saga/effects'
import axios from 'axios';
import json from '../../util/language/English.json';

 export default function * asyncLoginSaga() {
    while(true) {
        const action = yield take(langActions.SET_LANG);
        console.log(action);
        try {
            const result = yield axios.get(action.payload.value);
            console.log('Language Change Success: ', result);
            yield put(langActions.getLang(result.data));
            localStorage.setItem('language', JSON.stringify(action.payload));
        } catch(e) {
            console.log('Language Change Failed: ', e);
            yield put(langActions.getLang(json));
        }
    }
};