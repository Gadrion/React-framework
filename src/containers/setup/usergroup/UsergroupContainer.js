import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Usergroups from '../../../components/setup/usergroup/Usergroups';
import Users from '../../../components/setup/usergroup/Users';

class UsergroupContainer extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Usergroups/>    
                <Users/>
            </div>
        )
    }
}

export default UsergroupContainer;
