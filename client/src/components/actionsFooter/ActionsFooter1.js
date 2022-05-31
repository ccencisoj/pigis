import React from 'react';
import clsx from 'clsx';
import styles from './ActionsFooter1.module.scss';

class ActionsFooter1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, wrap } = this.props;

    const styles_actions_footer1 = clsx({
      [styles.actions_footer1]: true,
      [styles.wrap]: wrap
    });

    return (
      <div className={styles_actions_footer1}>
        {children}
      </div>
    )
  }
}

export default ActionsFooter1;