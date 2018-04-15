import React, { Component } from 'react'
import { Container } from 'reactstrap';
import TitleHeader from '../../../components/common/TitleHeader';

class HeatmapContainer extends Component {

    render() {
        console.log('Heatmap');
        const headerData = {
            title: 'heatmap',
            icon: 'fa fa-map'
        }
        return (
            <React.Fragment>
                <TitleHeader headerData={headerData}/>
            </React.Fragment>
        )
    }
}

export default HeatmapContainer;


// export default connect(
//     (state) => ({
//         isUsergroupSelect: state.usergroupModule.get('isUsergroupSelect'),
//         selectUsergroup: state.usergroupModule.get('selectUsergroup')
//     }),
//     (dispatch) => ({
//         UsergroupActions: bindActionCreators(usergroupActions, dispatch)
//     })
// )(HeatmapContainer);