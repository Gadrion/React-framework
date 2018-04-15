import React, { Component } from 'react'
import { Container } from 'reactstrap';
import TitleHeader from '../../../components/common/TitleHeader';

class QueueContainer extends Component {

    render() {
        console.log('Queue');
        const headerData = {
            title: 'queue',
            icon: 'fa fa-qq'
        }
        return (
            <React.Fragment>
                <TitleHeader headerData={headerData}/>
            </React.Fragment>
        )
    }
}

export default QueueContainer;

// export default connect(
//     (state) => ({
//         isUsergroupSelect: state.usergroupModule.get('isUsergroupSelect'),
//         selectUsergroup: state.usergroupModule.get('selectUsergroup')
//     }),
//     (dispatch) => ({
//         UsergroupActions: bindActionCreators(usergroupActions, dispatch)
//     })
// )(QueueContainer);
