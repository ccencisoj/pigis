import React from 'react';
import styles from './ChildsContainer1.module.scss';
import { ChildActions1 } from 'components/childActions';
import { GridContainer1 } from 'components/gridContainer';
import { ContainerHeader1 } from 'components/containerHeader';

class ChildsContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <div className={styles.childs_container1}>
        <ContainerHeader1
          title="Hijos"
          actions={ChildActions1}/>
        <div className={styles.main}>
          <GridContainer1>
            {children}
          </GridContainer1>
        </div>
      </div>
    )
  }
}

export default ChildsContainer1;