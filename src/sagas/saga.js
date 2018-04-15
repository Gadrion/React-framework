import loginSaga from './login/loginSaga';
import usergroupSaga from './setup/usergroup/usergroupSaga';
import langSaga from './lang/langSaga';
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
    yield fork(loginSaga);
    yield fork(usergroupSaga);
    yield fork(langSaga);
};