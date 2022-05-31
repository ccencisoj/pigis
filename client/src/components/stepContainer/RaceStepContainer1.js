import React from 'react';
import styles from './RaceStepContainer1.module.scss';

class RaceStepContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, title, sentence } = this.props;

    return (
      <div className={styles.race_step_container1}>
        <div className={styles.header}>
          <p className={styles.title}>
            {title}
          </p>
          <p className={styles.sentence}>
            {sentence}
          </p>
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    )
  }
}

export default RaceStepContainer1;