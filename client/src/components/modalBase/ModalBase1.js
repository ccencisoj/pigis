import React from 'react';
import styles from './ModalBase1.module.scss';
import { MODAL_TIMEOUT } from 'contants/common';
import OutsideClickHandler from 'react-outside-click-handler';

class ModalBase1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount = ()=> {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
  }

  render = ()=> {
    const { children, hideModal } = this.props;

    return (
      <div className={styles.modal_base1}>
        <OutsideClickHandler 
          onOutsideClick={()=> hideModal(MODAL_TIMEOUT)}>
          {children}
        </OutsideClickHandler>
      </div>
    )
  }
}

export default ModalBase1;