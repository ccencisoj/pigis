import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import styles from './AccountCard1.module.scss';
import { DELETE_CHILD } from 'contants/actionTypes';
import { deleteChild } from 'utils/childsManager';

const mapActionsToProps = (dispatch)=> ({
  deleteChild: (child)=> dispatch({
    type: DELETE_CHILD,
    payload: child
  })
});

class AccountCard1 extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteAccount = ()=> {
    const { id: childId } = this.props;
    deleteChild({id: childId});
    this.props.deleteChild({id: childId});
  }

  startSession = ()=> {
    const { code, router } = this.props;
  
    agent.Child.login({code}).then(()=> {
      router.push("/child/home");
    })
    .catch((e)=> {
      alert(e.response?.data?.message);
      //ignore error
    })
  }

  render = ()=> {
    const { 
      image, 
      name, 
    } = this.props; 
    
    return (
      <div className={styles.account_card1}>
        <div className={styles.user}
          onClick={this.startSession}>
          <img className={styles.image} src={image.url}/>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.actions}>
          <Button
            icon={Icon.X}
            onClick={this.deleteAccount}/>
        </div>
      </div>
    )
  }
}

const ConnectedAccountCard1 = connect(
  null, mapActionsToProps)(AccountCard1);

export default (props)=> {
  const router = useRouter();

  return <ConnectedAccountCard1 {...props}
    router={router}/>
}