import React from 'react';
import clsx from 'clsx';
import * as Icon from 'react-feather';
import styles from './CloseButton1.module.scss';

class CloseButton1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { small, onClick } = this.props;

    const styles_close_button1 = clsx({
      [styles.close_button1]: true,
      [styles.small]: small
    });

    return (
      <div className={styles_close_button1} 
        onClick={onClick}>
        <Icon.X className={styles.icon}/>
      </div>
    )
  }
}

export default CloseButton1;