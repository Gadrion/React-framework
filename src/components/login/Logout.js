import React from 'react';
import Lang from '../../containers/common/Lang';
// import './Logout.css';

const Logout = ({showModal, userid}) => (
  <Lang 
    render={({lang}) => (
    <div className="auth" onClick={showModal}>
        <i className="fa fa-user"></i>
        <span>{userid}</span>
    </div>
    )}
  />
);

export default Logout;
