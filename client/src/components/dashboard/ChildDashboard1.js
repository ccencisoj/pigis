import React from 'react';
import { connect } from 'react-redux';
import styles from './ChildDashboard1.module.scss';
import RaceBlock1 from 'components/raceBlock/RaceBlock1';
import { RaceHistoryBlock1 } from 'components/historyBlock';

const mapStateToProps = (store)=> ({
  child: store.common.child
});

class ChildDashboard1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { child } = this.props;

    return (
      <div className={styles.child_dashboard1}>
        <div className={styles.left}>
          <div className={styles.container_welcome}>
            <p className={styles.label}>Bienvenido</p>
            <p className={styles.value}>{child?.name}</p>
          </div>      
          <div className={styles.container}>
            <p className={styles.label}>Dinero</p>
            <p className={styles.value}>${child.cash}</p>
          </div>
          <div className={styles.container}>
            <p className={styles.label}>
              Calorias quemadas
              <span className={styles.tag}>Hoy</span>
            </p>
            <p className={styles.value}>0</p>
          </div>
        </div>
        <div className={styles.right}>
          <RaceBlock1/>
          <RaceHistoryBlock1/>
        </div>
      </div>
    )
  }
}

const ConnectedChildDashboard1 = connect(
  mapStateToProps, null)(ChildDashboard1);

export default ConnectedChildDashboard1;