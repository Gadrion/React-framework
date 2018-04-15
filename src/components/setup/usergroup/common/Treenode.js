import React, { Component } from 'react';
// import './UserGroup.css';
import '../../../../containers/setup/usergroup/UserGroup.css';
import { Treebeard, decorators } from 'react-treebeard';

class Treenode extends Component {
    state= {
        cursor:'',
        treeData: {}
    }

    componentWillMount(){
        this.handleSelect = this.handleSelect.bind(this);
        // this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);

        decorators.Container = (props) => {
            return (
                <div>
                    <div className="tet" >
                        <props.decorators.Toggle node={props.node} handleClick={props.onClick}/>
                        <props.decorators.Header node={props.node} handleSelect={this.handleSelect}/>
                    </div>
                </div>
            );
        }
        
        this.setState({
            treeData: this.props.treeData
        })
    }

    // shouldComponentUpdate(changeProps,e,t) {
    //     console.log(e, t);
    //     return (changeProps.treeData === this.props.treeData) ? false : true;
    // }

    handleSelect = (node) => {
        const treeData = this.props.treeData;
        this.changeActive(treeData, node);
        this.setState({ treeData });
    }

    changeActive = (treeDatas, node) => {
        treeDatas.map(treedata => {
            if(treedata.children) {
                this.changeActive(treedata.children, node);
            }
            return treedata.active = (treedata.name === node.name) ? true : false;
        });
    }

    onToggle = (node, toggled) => {
        if (this.state.cursor) { this.state.cursor.active = false; }
        if (node.children) { node.toggled = toggled }
        node.active = true;
        this.setState({ cursor: node });
    }

    render() {
        const { onToggle } = this;
        const { decorator } = this.props;
        console.log('render');
        return (
            <div className="treenode-container">
                <Treebeard className="treebeard" data={this.state.treeData} onToggle={onToggle} animations={false}/>
            </div>
        );
    }
}

export default Treenode;
