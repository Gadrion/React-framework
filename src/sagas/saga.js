import loginSaga from './loginSaga';
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
    yield fork(loginSaga);
  };