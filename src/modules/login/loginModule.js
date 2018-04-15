import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action
export const LOGIN = 'login/LOGIN';
const LOGIN_PENDDING = 'login/LOGIN_PENDDING';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
const LOGOUT = 'login/LOGOUT';

// action create
export const login = createAction(LOGIN);
export const loginPendding = createAction(LOGIN_PENDDING);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const logout = createAction(LOGOUT);

const initialState = Map({
    pendding: false,
    error: false,
    isLogin: false
});

// reducer
export default handleActions({
    [LOGIN_PENDDING]: (state, action) => state.set('pendding', action.payload),
    [LOGIN_SUCCESS]: (state, action) => {
        const { pendding, isLogin } = action.payload;

        return state.set('pendding', pendding)
                    .set('isLogin', isLogin);
    },
    [LOGIN_FAILURE]: (state, action) => {
        const { pendding, error, isLogin } = action.payload;

        return state.set('pendding', pendding)
                    .set('error', error)
                    .set('isLogin', isLogin);
    },
    [LOGOUT]: (state, action) => state.set('isLogin', action.payload)
}, initialState);