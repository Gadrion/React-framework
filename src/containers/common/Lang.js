import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as langActions from '../../modules/common/langModule';
import axios from 'axios';

class Lang extends Component {

    componentWillMount() {
        const { currentLang, LangActions } = this.props;
        const prevLang = JSON.parse(localStorage.getItem('language')) || { label: 'English', value: '/language/English.json' };
        if (currentLang === null || currentLang.label !== prevLang.label) {
            LangActions.setLang(prevLang);
        }
    }
    
    render() {
        return this.props.render({
            lang: this.props.lang
        })
    }
}

export default connect(
    (state) => ({
        lang: state.langModule.get('lang'),
        currentLang: state.langModule.get('currentLang')
    }),
    (dispatch) => ({
        LangActions: bindActionCreators(langActions, dispatch)
    })
)(Lang);