import React from 'react';
import styles from './ContainerHeader1.module.scss';

class ContainerHeader1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { title, info, actions: Actions } = this.props;

    return (
      <div className={styles.container_header1}>
        <div className={styles.left}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.right}>
          {Actions && <Actions/>}
        </div>
      </div>
    )
  }
}

export default ContainerHeader1;