import React from 'react';
import IconUserGroup from 'react-icons/lib/fa/group';
import Lang from '../../containers/common/Lang';

const TitleHeader = ({headerData}) => (
    <Lang 
      render={({lang}) => (
        <div className="setup-header">
             <h4>{lang[headerData.title]} <i className={headerData.icon}></i></h4>
             <hr className="setup-hr" />
        </div>
      )}
    />
  );

export default TitleHeader;