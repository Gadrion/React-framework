import * as usergroupActions from '../../../modules/setup/usergroup/usergroupModule';
import { take, put, all } from 'redux-saga/effects'
import axios from 'axios';

// const loginURL = axios.post('/url', data);
const usergroupURL = '/usergroups';

function * asyncusergroupAddSaga() {
    while(true) {
        const action = yield take(usergroupActions.USERGROUP_ADD);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.post(usergroupURL, action.payload);
            yield put(usergroupActions.usergroupAddSuccess({
                name: action.payload.name, id: result.data.id
            }));
        } catch(e) {
            console.log('Login Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

function * asyncusergroupGetAllSaga() {
    while(true) {
        const action = yield take(usergroupActions.USERGROUP_GET_ALL);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.get(usergroupURL);
            console.log(result);
            yield put(usergroupActions.usergroupGetAllSuccess(result.data));
        } catch(e) {
            console.log('Login Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

function * asyncusergroupGetSaga() {
    while(true) {
        const action = yield take(usergroupActions.USERGROUP_GET);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.get(usergroupURL + `/${action.payload}`);
            console.log('get Success: ', result);
            yield put(usergroupActions.usergroupGetSuccess(result.data));
        } catch(e) {
            console.log('Login Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

function * asyncusergroupUpdateSaga() {
    while(true) {
        const action = yield take(usergroupActions.usergroupUpdate);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.put(usergroupURL + `/${action.payload.id}`, action.payload);
            console.log('Login Success: ', result);
            yield put(usergroupActions.usergroupUpdateSuccess({
                name: action.payload.name, id: action.payload.id
            }));
        } catch(e) {
            console.log('Login Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

function * asyncusergroupDeleteSaga() {
    while(true) {
        const action = yield take(usergroupActions.usergroupDelete);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.delete(usergroupURL + `/${action.payload.id}`);
            console.log('Login Success: ', result);
            yield put(usergroupActions.usergroupDeleteSuccess({id: action.payload.id}));
        } catch(e) {
            console.log('Login Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

function * asyncUserAddSaga() {
    while(true) {
        const action = yield take(usergroupActions.userAdd);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.post(usergroupURL + `/${action.payload.parentId}` + '/users', action.payload);
            yield put(usergroupActions.userAddSuccess({
               ...action.payload, 
               _id: result.data.id
            }));
        } catch(e) {
            console.log('Add User Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

function * asyncUserUpdateSaga() {
    while(true) {
        const action = yield take(usergroupActions.userUpdate);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.put(usergroupURL + `/${action.payload.parentId}` + '/users' + `/${action.payload.id}`, action.payload);
            yield put(usergroupActions.userUpdateSuccess(action.payload));
        } catch(e) {
            console.log('Add User Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

function * asyncUserDeleteSaga() {
    while(true) {
        const action = yield take(usergroupActions.userDelete);
        console.log(action);
        // yield put(usergroupActions.loginPendding(true));
        try {
            const result = yield axios.delete(usergroupURL + `/${action.payload.parentId}` + '/users' + `/${action.payload.id}`, action.payload);
            yield put(usergroupActions.userDeleteSuccess({parentId: action.payload.parentId, id: action.payload.id}));
        } catch(e) {
            console.log('Add User Failed: ', e);
            // yield put(usergroupActions.loginFailure({pendding: false, error: true, isLogin: false}));
        }
    }
};

export default function * usergroupRootSaga() {
    yield all([
        asyncusergroupAddSaga(),
        asyncusergroupGetAllSaga(),
        asyncusergroupGetSaga(),
        asyncusergroupUpdateSaga(),
        asyncusergroupDeleteSaga(),
        asyncUserAddSaga(),
        asyncUserUpdateSaga(),
        asyncUserDeleteSaga()
    ])
}