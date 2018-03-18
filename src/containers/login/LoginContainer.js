import React, { Component } from 'react'
import Login from '../../components/login/Login';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as loginActions from '../../modules/loginModule';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit(e, f) {
        e.preventDefault();
        const { LoginActions } = this.props;

        LoginActions.login({
            id: e.target[0].value,
            password: e.target[1].value
        });
    }

    render() {
        const { pendding, error } = this.props;
        console.log('pendding', pendding);

        return (
            <div>
                <Login onLogin={this.handleLoginSubmit}/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        pendding: state.loginModule.get('pendding'),
        error: state.loginModule.get('error')
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch)
    })
)(LoginContainer);