import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usergroupActions from '../../../modules/setup/usergroup/usergroupModule';
import './UserGroup.css';
import { Treebeard, decorators } from 'react-treebeard';
import IconUserGroup from 'react-icons/lib/fa/group';
import IconUser from 'react-icons/lib/fa/user';

const styled = {
    marginLeft: '25px'
}

decorators.Header = (props) => {
    return (
        <div className={(props.node.active ? 'active': '')}>
            <div className="treebeard-header">
                {props.node.isUsergroup ? <IconUserGroup /> : <IconUser style={styled} />}
                {props.node.name}
            </div>
            <button>test </button>
        </div>
    );
}

decorators.Toggle = ({style, node}) => {
    return (
        <div>
        </div>
    );
}
decorators.Container = (props) => {
    return (
        <div onClick={props.onClick}>
            <div className="tet">
                <props.decorators.Toggle node={props.node}/>
                <props.decorators.Header node={props.node}/>
            </div>
        </div>
    );
}

class TreeNodeContainer extends Component {
    state = {
        treeData: {}
    };

    componentWillMount(e){
        const { UsergroupActions } = this.props;
        UsergroupActions.usergroupGetAll();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            treeData: nextProps.usergroupTree.toJS()
        });
    }

    onToggle = (node, toggled) => {
        const { UsergroupActions } = this.props;
        if (this.state.cursor) { this.state.cursor.active = false; }
        node.active = true;
        if (node.children) { node.toggled = toggled; }
        if (node.isUsergroup) { 
            UsergroupActions.usergroupGet(node.id); 
        } else {
            UsergroupActions.userGet({
                parentId: node.parentId, 
                id: node.id
            }); 
        }
        this.setState({ cursor: node });
    }

    render() {
        const { onToggle } = this;
        const { treeData } = this.state;
        console.log('treeRender');

        return (
            <div className="treenode-container">
                <Treebeard className="treebeard" data={treeData} onToggle={onToggle} decorators={decorators}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        usergroupTree: state.usergroupModule.get('usergroupTree')
    }),
    (dispatch) => ({
        UsergroupActions: bindActionCreators(usergroupActions, dispatch)
    })
)(TreeNodeContainer);