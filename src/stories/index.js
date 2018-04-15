import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Treenode from '../components/setup/usergroup/common/Treenode';
import IconUserGroup from 'react-icons/lib/fa/group';
import IconUser from 'react-icons/lib/fa/user';
import IconPencil from 'react-icons/lib/fa/pencil';
import IconAngleRight from 'react-icons/lib/fa/angle-right';
import IconAngleDown from 'react-icons/lib/fa/angle-down';
import { Treebeard, decorators } from 'react-treebeard';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('111')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const datas =[
  {
    id:'',
    name: 'admin1',
    isUsergroup: true,
    children: [
      {
        id:'',
        name: 'user1',
        isUsergroup: false,
      },
      {
        id:'',
        name: 'user2',
        isUsergroup: false,
      },
      {
        id:'',
        name: 'user3',
        isUsergroup: false,
      }
    ]
  },
  {
    id:'',
    name: 'admin2',
    isUsergroup: true,
    children: [
      {
        id:'',
        name: 'user4',
        isUsergroup: false,
      },
      {
        id:'',
        name: 'user5',
        isUsergroup: false,
      },
      {
        id:'',
        name: 'user6',
        isUsergroup: false,
      }
    ]
  }
];

const styled = {
    marginLeft: '25px'
}

decorators.Header = (props) => {
    return (
        <div className={(props.node.active ? 'active': '')}>
            <div className="treebeard-header">
              <span onClick={()=>props.handleSelect(props.node)}>
                {props.node.isUsergroup ? <IconUserGroup /> : <IconUser style={styled} />}
                {props.node.name}
              </span>
              {props.node.isUsergroup ? <button><IconPencil /> </button> : null}
            </div>
            <div>
              add users...
            </div>
        </div>
    );
}

decorators.Toggle = ({node, handleClick}) => {
    return (
        <div className="treebeard-toogle" onClick={handleClick}>
          { node.isUsergroup ? ( node.toggled ? <IconAngleDown /> : <IconAngleRight />) : null }
        </div>
    );
}

// decorators.Container = (props) => {
//     console.log('props',props)
//     return (
//         <div>
//             <div className="tet" >
//                 <props.decorators.Toggle node={props.node} handleClick={props.onClick}/>
//                 <props.decorators.Header node={props.node}/>
//             </div>
//         </div>
//     );
// }

storiesOf('Treebeard', module)
  .add('default', _ => <Treenode treeData={datas} />);