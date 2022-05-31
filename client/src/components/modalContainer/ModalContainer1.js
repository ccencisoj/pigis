import React from 'react';
import clsx from 'clsx';
import * as Icon from 'react-feather';
import Button from 'components/button/Button';
import { MODAL_TIMEOUT } from 'contants/common';
import styles from './ModalContainer1.module.scss';
import { useViewport } from 'hooks/ViewportContext';

class ModalContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      title, 
      children,
      willHiddenModal, 
      hideModal,
      viewport,
      onClose
    } = this.props;

    const styles_modal_container1 = clsx({
      [styles.modal_container1]: true,
      [styles.will_hidden_modal]: willHiddenModal
    });

    return (
      <div className={styles_modal_container1}>
        <div className={styles.header}>
          {viewport.isMobile &&
          <Button
            blackColor={true}
            icon={Icon.ChevronLeft}
            onClick={()=> {
              if(typeof onClose === "function") 
                return onClose(()=> hideModal(200));
              hideModal(200);
            }}/>}
          <p className={styles.title}>{title}</p>
          <div className={styles.actions}>
            {!viewport.isMobile &&
            <Button
              icon={Icon.X}
              blackColor={true}
              onClick={()=> {
                if(typeof onClose === "function") 
                  return onClose(()=> hideModal(MODAL_TIMEOUT));
                hideModal(MODAL_TIMEOUT);
              }}/>}
          </div>
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const viewport = useViewport();

  return <ModalContainer1 {...props}
    viewport={viewport}/>;
}