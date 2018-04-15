import React, { Component } from 'react'
import { Container } from 'reactstrap';
import DashboardComp from '../../components/dashboard/DashboardComp';

class DashboardContainer extends Component {

    render() {
        return (
            <div>
                <DashboardComp/>
            </div>
        )
    }
}

export default DashboardContainer;
