import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// UserGroup Action
export const USERGROUP_ADD = 'usergroup/USERGROUP_ADD';
const USERGROUP_ADD_PENDDING = 'usergroup/USERGROUP_ADD_PENDDING';
const USERGROUP_ADD_SUCCESS = 'usergroup/USERGROUP_ADD_SUCCESS';
const USERGROUP_ADD_FAILURE = 'usergroup/USERGROUP_ADD_FAILURE';

export const usergroupAdd = createAction(USERGROUP_ADD);
export const usergroupAddPendding = createAction(USERGROUP_ADD_PENDDING);
export const usergroupAddSuccess = createAction(USERGROUP_ADD_SUCCESS);
export const usergroupAddFailure = createAction(USERGROUP_ADD_FAILURE);

export const USERGROUP_GET_ALL = 'usergroup/USERGROUP_GET_ALL';
const USERGROUP_GET_ALL_PENDDING = 'usergroup/USERGROUP_GET_ALL_PENDDING';
const USERGROUP_GET_ALL_SUCCESS = 'usergroup/USERGROUP_GET_ALL_SUCCESS';
const USERGROUP_GET_ALL_FAILURE = 'usergroup/USERGROUP_GET_ALL_FAILURE';

export const usergroupGetAll = createAction(USERGROUP_GET_ALL);
export const usergroupGetAllPendding = createAction(USERGROUP_GET_ALL_PENDDING);
export const usergroupGetAllSuccess = createAction(USERGROUP_GET_ALL_SUCCESS);
export const usergroupGetAllFailure = createAction(USERGROUP_GET_ALL_FAILURE);

export const USERGROUP_GET = 'usergroup/USERGROUP_GET';
const USERGROUP_GET_PENDDING = 'usergroup/USERGROUP_GET_PENDDING';
const USERGROUP_GET_SUCCESS = 'usergroup/USERGROUP_GET_SUCCESS';
const USERGROUP_GET_FAILURE = 'usergroup/USERGROUP_GET_FAILURE';

export const usergroupGet = createAction(USERGROUP_GET);
export const usergroupGetPendding = createAction(USERGROUP_GET_PENDDING);
export const usergroupGetSuccess = createAction(USERGROUP_GET_SUCCESS);
export const usergroupGetFailure = createAction(USERGROUP_GET_FAILURE);

export const USERGROUP_UPDATE = 'usergroup/USERGROUP_UPDATE';
const USERGROUP_UPDATE_PENDDING = 'usergroup/USERGROUP_UPDATE_PENDDING';
const USERGROUP_UPDATE_SUCCESS = 'usergroup/USERGROUP_UPDATE_SUCCESS';
const USERGROUP_UPDATE_FAILURE = 'usergroup/USERGROUP_UPDATE_FAILURE';

export const usergroupUpdate = createAction(USERGROUP_UPDATE);
export const usergroupUpdatePendding = createAction(USERGROUP_UPDATE_PENDDING);
export const usergroupUpdateSuccess = createAction(USERGROUP_UPDATE_SUCCESS);
export const usergroupUpdateFailure = createAction(USERGROUP_UPDATE_FAILURE);

export const USERGROUP_DELETE = 'usergroup/USERGROUP_DELETE';
const USERGROUP_DELETE_PENDDING = 'usergroup/USERGROUP_DELETE_PENDDING';
const USERGROUP_DELETE_SUCCESS = 'usergroup/USERGROUP_DELETE_SUCCESS';
const USERGROUP_DELETE_FAILURE = 'usergroup/USERGROUP_DELETE_FAILURE';

export const usergroupDelete = createAction(USERGROUP_DELETE);
export const usergroupDeletePendding = createAction(USERGROUP_DELETE_PENDDING);
export const usergroupDeleteSuccess = createAction(USERGROUP_DELETE_SUCCESS);
export const usergroupDeleteFailure = createAction(USERGROUP_DELETE_FAILURE);

// User Action
export const USER_GET = 'user/USER_GET';
const USER_GET_PENDDING = 'user/USER_GET_PENDDING';
const USER_GET_SUCCESS = 'user/USER_GET_SUCCESS';
const USER_GET_FAILURE = 'user/USER_GET_FAILURE';

export const userGet = createAction(USER_GET);
export const userGetPendding = createAction(USER_GET_PENDDING);
export const userGetSuccess = createAction(USER_GET_SUCCESS);
export const userGetFailure = createAction(USER_GET_FAILURE);

export const USER_ADD = 'user/USER_ADD';
const USER_ADD_PENDDING = 'user/USER_ADD_PENDDING';
const USER_ADD_SUCCESS = 'user/USER_ADD_SUCCESS';
const USER_ADD_FAILURE = 'user/USER_ADD_FAILURE';

export const userAdd = createAction(USER_ADD);
export const userAddPendding = createAction(USER_ADD_PENDDING);
export const userAddSuccess = createAction(USER_ADD_SUCCESS);
export const userAddFailure = createAction(USER_ADD_FAILURE);

export const USER_UPDATE = 'user/USER_UPDATE';
const USER_UPDATE_PENDDING = 'user/USER_UPDATE_PENDDING';
const USER_UPDATE_SUCCESS = 'user/USER_UPDATE_SUCCESS';
const USER_UPDATE_FAILURE = 'user/USER_UPDATE_FAILURE';

export const userUpdate = createAction(USER_UPDATE);
export const userUpdatePendding = createAction(USER_UPDATE_PENDDING);
export const userUpdateSuccess = createAction(USER_UPDATE_SUCCESS);
export const userUpdateFailure = createAction(USER_UPDATE_FAILURE);

export const USER_DELETE = 'user/USER_DELETE';
const USER_DELETE_PENDDING = 'user/USER_DELETE_PENDDING';
const USER_DELETE_SUCCESS = 'user/USER_DELETE_SUCCESS';
const USER_DELETE_FAILURE = 'user/USER_DELETE_FAILURE';

export const userDelete = createAction(USER_DELETE);
export const userDeletePendding = createAction(USER_DELETE_PENDDING);
export const userDeleteSuccess = createAction(USER_DELETE_SUCCESS);
export const userDeleteFailure = createAction(USER_DELETE_FAILURE);

const initialState = Map({
    usergroupTree: List([
        Map({
            id: '',
            name: 'test',
            children: List([
                Map({
                    name: 'test2'
                })
            ])
        }),
        Map({
            name: 'test2'
        })
    ]),
    isUsergroupSelect: false,
    selectUsergroup: Map({}),
    selectUser: Map({})
});

const convertUserToUserTree = users => {
    let userTree = List([]);
    for(const user of users){
        userTree = userTree.push(Map({
            id: user._id,
            userid: user.userid,
            name: user.name,
            phone: user.phone,
            address: user.address,
            email: user.email,
            description: user.description,
            parentId: user.parentId,
            isUsergroup: false
        }));
    }
    return userTree;
}

const convertUsergroupToUsergroupTree = datas => {
    const result = {
        usergroupTree: List([])
    };

    for(const data of datas){
        result.usergroupTree = result.usergroupTree.push(Map({
            id: data._id,
            name: data.name,
            isUsergroup: true,
            children: convertUserToUserTree(data.users)
        }))
    }

    return result;
}

const convertUsergroup = data => {
    return Map({
        id: data._id,
        name: data.name,
        description: data.description,
        isUsergroup: true,
        authority: Number(data.authority)
    });
}

const convertUser = user => {
    return Map({
        id: user._id,
        userid: user.userid,
        name: user.name,
        phone: user.phone,
        address: user.address,
        email: user.email,
        description: user.description,
        parentId: user.parentId,
        isUsergroup: false
    });
}

const getIndex = (targetArr, _id) => {
    return targetArr.findIndex(target => {
        return target.get('id') === _id;
    });;

}

export default handleActions({
    // [LOGIN_PENDDING]: (state, action) => state.set('pendding', action.payload),
    [USERGROUP_ADD_SUCCESS]: (state, action) => {
        const usergroupTree = state.get('usergroupTree');

        return state.set('usergroupTree', usergroupTree.push(Map({
            ...action.payload,
            isUsergroup: true
        })));
    },
    [USERGROUP_ADD_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
    [USERGROUP_GET_ALL_SUCCESS]: (state, action) => {
        const { usergroupTree } = convertUsergroupToUsergroupTree(action.payload);

        return state.set('usergroupTree', usergroupTree);
    },
    [USERGROUP_GET_ALL_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
    [USERGROUP_GET_SUCCESS]: (state, action) => {
        const usergroup = convertUsergroup(action.payload);

        return state.set('isUsergroupSelect', true)
                    .set('selectUsergroup', usergroup);
    },
    [USERGROUP_GET_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
    [USERGROUP_UPDATE_SUCCESS]: (state, action) => {
        const usergroupTree = state.get('usergroupTree');
        const indexOfUsergroupTreeToUpdate = usergroupTree.findIndex(usergroup => {
            return usergroup.get('id') === action.payload.id;
        });

        return state.setIn(['usergroupTree', indexOfUsergroupTreeToUpdate, 'name'], action.payload.name);
    },
    [USERGROUP_UPDATE_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
    [USERGROUP_DELETE_SUCCESS]: (state, action) => {
        const usergroupTree = state.get('usergroupTree');
        const indexOfUsergroupTreeToDelete = usergroupTree.findIndex(usergroup => {
            return usergroup.get('id') === action.payload.id;
        });

        return state.set('usergroupTree',usergroupTree.delete(indexOfUsergroupTreeToDelete));
    },
    [USERGROUP_DELETE_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
    [USER_GET]: (state, action) => {
        const userGroup = state.get('usergroupTree');
        const userGroupIndex = getIndex(userGroup, action.payload.parentId);
        const users = userGroup.getIn([userGroupIndex, 'children']);
        const userIndex = getIndex(users, action.payload.id);
        const user = users.get(userIndex);

        return state.set('isUsergroupSelect', false)
                    .set('selectUser', user);
    },
    [USER_ADD_SUCCESS]: (state, action) => {
        const userGroup = state.get('usergroupTree');
        const userGroupIndex = getIndex(userGroup, action.payload.parentId);
        const users = userGroup.getIn([userGroupIndex, 'children']);
        return state.setIn(['usergroupTree', userGroupIndex, 'children'], users.push(convertUser(action.payload)))
            .set('isUsergroupSelect', false);

    },
    [USER_ADD_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
    [USER_UPDATE_SUCCESS]: (state, action) => {
        const userGroup = state.get('usergroupTree');
        const userGroupIndex = getIndex(userGroup, action.payload.parentId);
        const users = userGroup.getIn([userGroupIndex, 'children']);
        const userIndex = getIndex(users, action.payload.id);
        return state.setIn(['usergroupTree', userGroupIndex, 'children', userIndex], convertUser(action.payload))
            .set('isUsergroupSelect', false);
    },
    [USER_UPDATE_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
    [USER_DELETE_SUCCESS]: (state, action) => {
        const userGroup = state.get('usergroupTree');
        const userGroupIndex = getIndex(userGroup, action.payload.parentId);
        const users = userGroup.getIn([userGroupIndex, 'children']);
        const userIndex = getIndex(users, action.payload.id);
        return state.deleteIn(['usergroupTree', userGroupIndex, 'children', userIndex]);
    },
    [USER_DELETE_FAILURE]: (state, action) => {
        const { pendding } = action.payload;

        return state.set('pendding', pendding);
    },
}, initialState);