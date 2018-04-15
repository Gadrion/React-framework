import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usergroupActions from '../../../modules/setup/usergroup/usergroupModule';
import PropTypes from 'prop-types'
import TitleHeader from '../../../components/common/TitleHeader';
import UsergroupList from '../../../components/setup/usergroup/UsergroupList';
import Usergroups from '../../../components/setup/usergroup/Usergroups';
import Users from '../../../components/setup/usergroup/Users';
import { Container, Row, Col } from 'reactstrap';
import './UserGroup.css';
import { encrypt } from '../../../util/lib/encrypt';

class UsergroupContainer extends Component {
    static propTypes = {

    }

    handleUsergroup = (type, data) => {
        const { UsergroupActions, selectUsergroup } = this.props;
        switch(type) {
            case 'add':
                UsergroupActions.usergroupAdd({
                    ...data
                })
            break;
            case 'update':
                UsergroupActions.usergroupUpdate({
                    ...data
                })
            break;
            case 'addUser':
                const parentId = selectUsergroup.toJS().id;
                UsergroupActions.userAdd({
                    ...data,
                    password: encrypt(data.password),
                    parentId: parentId
                });
            break;
            case 'updateUser':
                UsergroupActions.userUpdate({
                    ...data
                })
            break;
            default:
            break;
        }
    }

    handleDelete = (type, data) => {
        const { UsergroupActions, selectUsergroup } = this.props;
        switch(type) {
            case 'usergroup':
                UsergroupActions.usergroupDelete({
                    id: data.id
                });
            case 'user':
                UsergroupActions.userDelete({
                    id: data.id,
                    parentId: data.parentId
                });
            break;
            default:
            break;
        }
    }

    render() {
        console.log('usergroup');
        const { handleUsergroup, handleDelete } = this;
        const { isUsergroupSelect, selectUsergroup, selectUser } = this.props;
        const headerData = {
            title: 'user',
            icon: 'fa fa-users'
        }
        return (
            <React.Fragment>
                <TitleHeader headerData={headerData}/>
                <Row className="usergroup-container">
                    <Col>
                        <UsergroupList handleDelete={handleDelete} selectUsergroup={isUsergroupSelect ? selectUsergroup.toJS() : undefined} selectUser={isUsergroupSelect ?  undefined : selectUser.toJS()}/>
                    </Col>
                    <Col>
                        <Usergroups handleUsergroup={handleUsergroup} selectUsergroup={isUsergroupSelect ? selectUsergroup.toJS() : undefined} />
                    </Col>
                    <Col>
                        <Users handleUsergroup={handleUsergroup} selectUser={isUsergroupSelect ? undefined : selectUser.toJS()}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        isUsergroupSelect: state.usergroupModule.get('isUsergroupSelect'),
        selectUsergroup: state.usergroupModule.get('selectUsergroup'),
        selectUser: state.usergroupModule.get('selectUser'),
    }),
    (dispatch) => ({
        UsergroupActions: bindActionCreators(usergroupActions, dispatch)
    })
)(UsergroupContainer);
