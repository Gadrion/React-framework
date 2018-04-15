import { combineReducers } from 'redux';

import loginModule from './login/loginModule';
import langModule from './common/langModule';
import usergroupModule from './setup/usergroup/usergroupModule';

export default combineReducers({
    langModule,
    loginModule,
    usergroupModule
});