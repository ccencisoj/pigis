import React from 'react';
import clsx from 'clsx';
import { ParentBarside1 } from 'components/barside';
import styles from './ParentBarsideModal1.module.scss';
import { BarsideModalBase1 } from 'components/modalBase';

class ParentBarsideModal1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { hideModal, willHiddenModal } = this.props;
    
    const styles_parent_barside_modal1 = clsx({
      [styles.parent_barside_modal1]: true,
      [styles.will_hidden_modal]: willHiddenModal
    });

    return (
      <BarsideModalBase1 
        hideModal={hideModal} 
        willHiddenModal={willHiddenModal}>
        <div className={styles_parent_barside_modal1}>
          <ParentBarside1 
            hideModal={hideModal}/>
        </div>
      </BarsideModalBase1>
    )
  }
}

export default ParentBarsideModal1;