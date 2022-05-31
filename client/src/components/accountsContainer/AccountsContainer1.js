import React from 'react';
import styles from './AccountsContainer1.module.scss';

class AccountsContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <div className={styles.accounts_container1}>
        {children}
      </div>
    )
  }
}

export default AccountsContainer1;