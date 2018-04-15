import React, { Component } from 'react'
import { Container } from 'reactstrap';
import TitleHeader from '../../../components/common/TitleHeader';

class CountingContainer extends Component {

    render() {
        console.log('Counting');
        const headerData = {
            title: 'counting',
            icon: 'fa fa-users'
        }
        return (
            <React.Fragment>
                <TitleHeader headerData={headerData}/>
            </React.Fragment>
        )
    }
}

export default CountingContainer;

// export default connect(
//     (state) => ({
//         isUsergroupSelect: state.usergroupModule.get('isUsergroupSelect'),
//         selectUsergroup: state.usergroupModule.get('selectUsergroup')
//     }),
//     (dispatch) => ({
//         UsergroupActions: bindActionCreators(usergroupActions, dispatch)
//     })
// )(CountingContainer);
