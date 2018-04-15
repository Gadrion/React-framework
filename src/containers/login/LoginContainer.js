import React, { Component } from 'react'
import Login from '../../components/login/Login';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as loginActions from '../../modules/login/loginModule';
import * as langActions from '../../modules/common/langModule';
import {Redirect, withRouter} from 'react-router-dom';
import { encrypt } from '../../util/lib/encrypt';

class LoginContainer extends Component {

    componentWillMount() {
        this.setState({
            currentLang: JSON.parse(localStorage.getItem('language')) || { label: 'English', value: '/language/English.json' }
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isLogin) {
            nextProps.history.push('/setup');
        }
        // console.log('Login render before', this.props);
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        const { LoginActions } = this.props;
        const password = encrypt(e.target[1].value);

        LoginActions.login({
            userid: e.target[0].value,
            password
        });
    }

    langChange = e => {
        const { LangActions } = this.props;
        if (e.label !== this.state.currentLang.label) {
            this.setState({
                currentLang: e
            });
            LangActions.setLang(e);
        }
    }

    render() {
        const { pendding } = this.props;
        const { handleLoginSubmit, langChange } = this;
        const supportLanguages = [
            { label: 'English', value: '/language/English.json' },
            { label: 'Korean', value: '/language/Korean.json' }
        ];
        console.log('pendding', pendding);
        return (
            <React.Fragment>
                <Login onLogin={handleLoginSubmit} supportLanguages={supportLanguages} currentLang={this.state.currentLang} langChange={langChange}/>
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        pendding: state.loginModule.get('pendding'),
        error: state.loginModule.get('error'),
        isLogin: state.loginModule.get('isLogin')
    }),
    (dispatch) => ({
        LoginActions: bindActionCreators(loginActions, dispatch),
        LangActions: bindActionCreators(langActions, dispatch)
    })
)(LoginContainer);