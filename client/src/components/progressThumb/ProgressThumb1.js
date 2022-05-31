import React from 'react';
import clsx from 'clsx';
import styles from './ProgressThumb1.module.scss';

class ProgressThumb1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const {
      fill
    } = this.props;

    const styles_progress_thumb1 = clsx({
      [styles.progress_thumb1]: true,
      [styles.fill]: fill
    });

    return (
      <div className={styles_progress_thumb1}>
        <div className={styles.thumb}></div>
      </div>
    )
  }
}

export default ProgressThumb1;