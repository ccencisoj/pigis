import React from 'react';
import clsx from 'clsx';
import styles from './Loading1.module.scss';

class Loading1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const {
      light
    } = this.props;

    const styles_loading1 = clsx({
      [styles.loading1]: true,
      [styles.light]: light
    });

    return (
      <div className={styles_loading1}></div>
    )
  }
}

export default Loading1;