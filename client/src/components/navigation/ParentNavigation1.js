import React from 'react';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import Button from 'components/button/Button';
import { useModals } from 'hooks/ModalsContext';
import styles from './ParentNavigation1.module.scss';
import { SHOW_BARSIDE, HIDE_BARSIDE } from 'contants/actionTypes';
import ParentBarsideModal1 from 'components/modal/ParentBarsideModal1';

const mapActionsToProps = (dispatch)=> ({
  showBarside: ()=> dispatch({
    type: SHOW_BARSIDE
  }),

  hideBarside: ()=> dispatch({
    type: HIDE_BARSIDE
  })
});

class ParentNavigation1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { showBarside, modals } = this.props;

    return (
      <div className={styles.parent_navigation1}>
        <div className={styles.left}>
          <Button
            blackColor={true}
            icon={Icon.Menu}
            onClick={()=> modals.add(ParentBarsideModal1, {})}/>
          <p className={styles.title}>Pigis</p>
        </div>
        <div className={styles.right}></div>
      </div>
    )
  }
}

const ConnectedParentNavigation1 = connect(
  null, mapActionsToProps)(ParentNavigation1);

export default (props)=> {
  const modals = useModals();

  return <ConnectedParentNavigation1 {...props}
    modals={modals}/>
}