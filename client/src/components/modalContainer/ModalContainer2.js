import React from 'react';
import styles from './ModalContainer2.module.scss';

class ModalContainer2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <div className={styles.modal_container2}>
        
      </div>
    )
  }
}

export default ModalContainer2;