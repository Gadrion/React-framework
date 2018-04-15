import React, { Component } from 'react';
import Input from './common/Input';
import Textarea from './common/Textarea';

const styled = {
    display: 'inline'
}

class Users extends Component {
    state = {
        userid: '',
        password: '',
        passwordCheck: '',
        name: '',
        phone: '',
        address: '',
        email: '',
        description: '',
        parentId: ''
    }

    inputChange = event => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }

    isEmpty = value => { 
        if (value === '' || value === null || typeof value === 'undefined' || 
        (value !== null && typeof value === 'object' && !Object.keys(value).length)) { 
            return true 
        } else { 
            return false 
        } 
    }

    validate() {
        if (this.state.password !== this.state.passwordCheck) {
            return false;
        }
        if (!this.isEmpty(this.state.userid) && !this.isEmpty(this.state.password) && !this.isEmpty(this.state.passwordCheck) && !this.isEmpty(this.state.name) &&
        !this.isEmpty(this.state.phone) && !this.isEmpty(this.state.address) && !this.isEmpty(this.state.email) && !this.isEmpty(this.state.description)) {
            return true;
        } else {
            return false;
        }
    }

    buttonClick = event => {
        const { handleUsergroup, validate } = this.props;
        const { selectUser } = this.props;
        this.validate();
        if (this.validate()) {
            switch(event.target.id) {
                case 'updateUser':
                    if (selectUser) {
                        handleUsergroup('updateUser', {
                            ...this.state,
                            id: selectUser.id
                        });
                    }
                break;
                case 'addUser':
                    handleUsergroup('addUser', this.state);
                break;
                default:
                break;
            }
        }
    }

    convertPropsToState = selectUser => {
        if(selectUser) {
            this.setState({
                userid: selectUser.userid,
                name: selectUser.name,
                phone: selectUser.phone,
                address: selectUser.address,
                email: selectUser.email,
                description: selectUser.description,
                parentId: selectUser.parentId,
            });
        }
    }

    componentWillReceiveProps(nextProps){
        this.convertPropsToState(nextProps.selectUser);
    }

    render() {
        const { inputChange, buttonClick } = this;
        const { userid, password, passwordCheck, name, phone, address, email, description } = this.state;
        return (
            <div>
            <h4>User</h4>
            <Input id ='userid' type='text' text='ID' placeholder="ID" value={userid} handleChange={inputChange}/>
            <Input id ='password' type='password' text='PW' placeholder="Password" value={password} handleChange={inputChange}/>
            <Input id ='passwordCheck' type='password' text='PW check' placeholder="passwrod Check" value={passwordCheck} handleChange={inputChange}/>
            <Input id ='name' type='text' text='Name' placeholder="User name" value={name} handleChange={inputChange}/>
            <Input id ='phone' type='text' text='Phone number' placeholder="Phone number" value={phone} handleChange={inputChange}/>
            <Input id ='address' type='text' text='Address' placeholder="Address" value={address} handleChange={inputChange}/>
            <Input id ='email' type='text' text='E-mail' placeholder="E-mail address" value={email} handleChange={inputChange}/>
            <Textarea id ='description' text='Desc' placeholder="Description about user" value={description} handleChange={inputChange}/>
            <div className="btn-group">
                <button id='updateUser' onClick={buttonClick}>Update</button>
                <button id='addUser' onClick={buttonClick}>Add</button>
            </div>
        </div>
        );
    }
}

export default Users;
