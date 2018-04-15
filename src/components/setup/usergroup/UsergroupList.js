import React, { Component } from 'react';
import TreeNodeContainer from '../../../containers/setup/usergroup/TreeNodeContainer';

const buttonStyle = {
    float: 'right',
    width: '70px'
}

class UsergroupList extends Component {
    handleListDelete = e => {
        const { selectUsergroup, handleDelete, selectUser } = this.props;
        if( selectUsergroup ) {
            if(selectUsergroup.isUsergroup) {
                handleDelete('usergroup', selectUsergroup);
            }
        } else if (selectUser) {
            if(!selectUser.isUsergroup) {
                handleDelete('user', selectUser);
            }
        }
    }

    render() {
        const { handleListDelete } = this;
        return (
            <React.Fragment>
                <button style={buttonStyle} onClick={handleListDelete}>Delete</button>
                <TreeNodeContainer />                 
            </React.Fragment>
        );
    }
}

export default UsergroupList;