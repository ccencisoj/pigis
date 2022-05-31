import React from 'react';
import styles from './FieldContainer1.module.scss';

class FieldContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, label } = this.props;

    return (
      <div className={styles.field_container1}>
        <div className={styles.header}>
          <p className={styles.label}>{label}</p>
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    )
  }
}

export default FieldContainer1;