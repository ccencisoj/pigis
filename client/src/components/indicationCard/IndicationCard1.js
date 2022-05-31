import React from 'react';
import styles from './IndicationCard1.module.scss';

class IndicationCard1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { label } = this.props;

    return (
      <div className={styles.indication_card1}>
        <div className={styles.line}></div>
        <p className={styles.label}>{label}</p>
      </div>
    )
  }
}

export default IndicationCard1;