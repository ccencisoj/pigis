import React from 'react';
import styles from './Tablet1.module.scss';
import { ContainerHeader1 } from 'components/containerHeader';

class Tablet1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, title, info, actions } = this.props;

    return (
      <div className={styles.tablet1}>
        <ContainerHeader1 
          title={title} 
          info={info}
          actions={actions}/>
        <div className={styles.main}>
          <div className={styles.container}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Tablet1;