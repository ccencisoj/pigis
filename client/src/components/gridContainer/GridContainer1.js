import React from 'react';
import styles from './GridContainer1.module.scss';

class GridContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <div className={styles.grid_container1}>
        {children}
      </div>
    )
  }
}

export default GridContainer1;