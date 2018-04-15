import React, { Component } from 'react'
import Logout from '../../components/login/Logout';
import Modal from '../../components/common/Modal';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as loginActions from '../../modules/login/loginModule';
import axios from 'axios';
import history from '../../routes/common/history'

class LogoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    showModal = (show) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout = e => {
        e.preventDefault();
        const { LoginActions } = this.props;
        LoginActions.logout(false);
        axios.defaults.headers = {
            ...axios.headers,
            'x-access-token': null
        };
        sessionStorage.removeItem('userid');
        history.push('/login');
    }

    render() {
        const userid = sessionStorage.getItem('userid');
        const modalInfo = {
            type: 'set',
            headerText: 'logout',
            contentText: 'logout_desc',
            ok: this.logout,
            cancel: this.showModal
        }
        return (
            <React.Fragment>
                <Logout showModal={this.showModal} userid={userid}/>
                {this.state.isOpen &&
                    <Modal modalInfo = {modalInfo} />
                }
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        userid: state.loginModule.get('userid'),
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch)
    })
)(LogoutContainer);