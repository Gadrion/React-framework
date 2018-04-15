import React, { Component } from 'react';
import Input from './common/Input';
import Textarea from './common/Textarea';

const usergroup_id = ['usergroup-name', 'usergroup-desc', 'usergroup-update', 'usergroup-add', 'director', 'store'];

const styled = {
    display: 'inline'
}

class Usergroups extends Component {
    state = {
        name: '',
        description: '',
        authority: 1 // default value
    }

    handleChange = event => {
        switch(event.target.id) {
            case usergroup_id[0]:
                this.setState({...this.state,
                    name: event.target.value
                });
            break;
            case usergroup_id[1]:
                this.setState({...this.state,
                    description: event.target.value
                });
            break;
            default:
                if( usergroup_id[4] || usergroup_id[5] ) {
                    this.setState({...this.state,
                        authority: Number(event.target.value)
                    });
                }
            break;
        }
    }

    handleClick = event => {
        const { handleUsergroup } = this.props;
        const { selectUsergroup } = this.props;

        switch(event.target.id) {
            case usergroup_id[2]:
                if(selectUsergroup.id) {
                    handleUsergroup('update', {
                        ...this.state,
                        id: selectUsergroup.id
                    });
                }
            break;
            case usergroup_id[3]:
                handleUsergroup('add', this.state);
            break;
            default:
            break;
        }
    }

    convertPropsToState = selectUsergroup => {
        if(selectUsergroup) {
            this.setState({
                name : selectUsergroup.name,
                description : selectUsergroup.description,
                authority : selectUsergroup.authority,
            });
        }
    }

    componentWillReceiveProps(nextProps){
        this.convertPropsToState(nextProps.selectUsergroup);
    }

    render() {
        const { handleChange, handleClick } = this;
        const { name, description, authority } = this.state;

        return (
            <div>
                <h4> User Group </h4>
                <Input id={usergroup_id[0]} text="Name" placeholder="User Group Name" handleChange={handleChange} value={name}/>
                <Textarea id={usergroup_id[1]} text="Desc" placeholder="Description about user group" handleChange={handleChange} value={description}/>
                <div>
                    <label>Auth</label>
                    <input type="radio" name="authRidio" value={1} id={usergroup_id[4]} onChange={handleChange} checked={(authority === 1)}/>
                    <label style={styled} htmlFor={usergroup_id[4]}>Director</label>
                    <br />
                    <input type="radio" name="authRidio" value={2} id={usergroup_id[5]} onChange={handleChange} checked={(authority === 2)}/>
                    <label style={styled} htmlFor={usergroup_id[5]}>Store</label>
                </div>
                
                <div className="btn-group">
                    <button id={usergroup_id[2]} onClick={handleClick}>Update</button>
                    <button id={usergroup_id[3]} onClick={handleClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default Usergroups;
