import React from 'react';
import clsx from 'clsx';
import copy from 'copy-to-clipboard';
import Button from 'components/button/Button';
import { ModalBase1 } from 'components/modalBase';
import styles from './AccessLinkModal1.module.scss';
import { ActionsFooter1 } from 'components/actionsFooter';
import { ModalContainer1 } from 'components/modalContainer';

class AccessLinkModal1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { hideModal, willHiddenModal, link } = this.props;

    const styles_access_link_modal1 = clsx({
      [styles.access_link_modal1]: true,
      [styles.will_hidden_modal]: willHiddenModal
    }); 

    return (
      <ModalBase1
        hideModal={hideModal}
        willHiddenModal={willHiddenModal}>
        <ModalContainer1 
          title="Link de acceso"
          hideModal={hideModal}
          willHiddenModal={willHiddenModal}>
          <div className={styles_access_link_modal1}>
            <div className={styles.main}>
              <p className={styles.link}>{link}</p>
            </div>
            <div className={styles.footer}>
              <ActionsFooter1>
                <Button
                  expand={true}
                  primary={true}
                  label="Copiar link"
                  onClick={()=> {
                    copy(link);
                    hideModal(200);
                  }}/>
              </ActionsFooter1>
            </div>
          </div>
        </ModalContainer1>
      </ModalBase1>
    )
  }
}

export default AccessLinkModal1;