import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import TitleHeader from '../../../components/common/TitleHeader';
import { Container, Row, Col } from 'reactstrap';

class SiteContainer extends Component {
   
    render() {
        console.log('site');
        const headerData = {
            title: 'site',
            icon: 'fa fa-sitemap'
        }
        return (
            <React.Fragment>
                <TitleHeader headerData={headerData}/>
            </React.Fragment>
        )
    }
}

export default SiteContainer;

// export default connect(
//     (state) => ({
//         isUsergroupSelect: state.usergroupModule.get('isUsergroupSelect'),
//         selectUsergroup: state.usergroupModule.get('selectUsergroup')
//     }),
//     (dispatch) => ({
//         UsergroupActions: bindActionCreators(usergroupActions, dispatch)
//     })
// )(SiteContainer);
