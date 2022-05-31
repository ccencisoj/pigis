import React from 'react';
import { BARSIDE_MODAL_TIMEOUT } from 'contants/common';
import styles from './BarsideModalBase1.module.scss';
import OutsideClickHandler from 'react-outside-click-handler';

class BarsideModalBase1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children, hideModal } = this.props;

    return (
      <div className={styles.barside_modal_base1}>
        <OutsideClickHandler 
          onOutsideClick={()=> hideModal(BARSIDE_MODAL_TIMEOUT)}>
          {children}
        </OutsideClickHandler>
      </div>
    )
  }
}

export default BarsideModalBase1;