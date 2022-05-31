import React from 'react';
import styles from './ChildFormBarside1.module.scss';

class ChildFormBarside1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    return (
      <div className={styles.child_form_barside1}>
        <p className={styles.sentence}>
          <span className={styles.bold}>ERES UN GORDITO TRAGON? </span> 
          ENTONCES COMIENZA A <span className={styles.bold_secundary}>
          GANAR DINERO </span> CON NOSOTROS AHORA MISMO
        </p>
        <img className={styles.figure1} src="/image/bike1.svg"/>
      </div>
    )
  }
}

export default ChildFormBarside1;