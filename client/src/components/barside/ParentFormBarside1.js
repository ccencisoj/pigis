import React from 'react';
import styles from './ParentFormBarside1.module.scss';

class ParentFormBarside1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    return (
      <div className={styles.parent_form_barside1}>
        <p className={styles.sentence}>
          NUESTRO <span className={styles.bold_secundary}>OBJETIVO </span>
          ES AYUDARTE A <span className={styles.bold_secundary}>INCENTIVAR </span> 
          A TU HIJO A QUEMAR CALORIAS
        </p>
        <img className={styles.figure1} src="/image/mom1.svg"/>        
      </div>
    )
  }
}

export default ParentFormBarside1;