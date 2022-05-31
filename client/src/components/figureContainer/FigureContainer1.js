import React from 'react';
import styles from './FigureContainer1.module.scss';

class FigureContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, title, sentence } = this.props;

    return (
      <div className={styles.figure_container1}>
        <div className={styles.main}>
          {children}
        </div>
        <div className={styles.footer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.sentence}>{sentence}</p>
        </div>
      </div>
    )
  }
}

export default FigureContainer1;