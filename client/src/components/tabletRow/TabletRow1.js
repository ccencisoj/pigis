import clsx from 'clsx';
import React from 'react';
import styles from './TabletRow1.module.scss';

class TabletRow1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, headerRow } = this.props;

    const styles_tablet_row1 = clsx({
      [styles.tablet_row1]: true,
      [styles.header_row]: headerRow
    });

    return (
      <div className={styles_tablet_row1}>
        {children}
        <div className={styles.line}></div>
      </div>
    )
  }
}

export default TabletRow1;