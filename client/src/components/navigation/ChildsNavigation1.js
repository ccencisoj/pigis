import React from 'react';
import { connect } from 'react-redux';
import styles from './ChildsNavigation1.module.scss';
import { ChildsNavigationItem1 } from 'components/navigationItem';
import { 
  CALORIES_AND_RACES_ITEM, 
  LIST_CHILDS_ITEM 
} from 'contants/common';
import { 
  SET_SELECTED_NAV_ITEM_S 
} from 'contants/actionTypes';

const mapStateToProps = (store)=> ({
  selectedNavItemS: store.collections.selectedNavItemS
});

const mapActionsToProps = (dispatch)=> ({
  setSelectedNavItemS: (item)=> dispatch({
    type: SET_SELECTED_NAV_ITEM_S,
    payload: item
  })
});

class ChildsNavigation1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      selectedNavItemS,
      setSelectedNavItemS
    } = this.props;

    return (
      <div className={styles.childs_navigation1}>
        <ChildsNavigationItem1
          selected={selectedNavItemS === LIST_CHILDS_ITEM}
          label="Lista de hijos"
          onClick={()=> setSelectedNavItemS(LIST_CHILDS_ITEM)}/>
        {/* <ChildsNavigationItem1
          selected={selectedNavItemS === CALORIES_AND_RACES_ITEM}
          label="Calorias y carreras"
          onClick={()=> setSelectedNavItemS(CALORIES_AND_RACES_ITEM)}/> */}
      </div>
    )
  }
}

const ConnectedChildsNavigation1 = connect(
  mapStateToProps, mapActionsToProps)(ChildsNavigation1);

export default ConnectedChildsNavigation1;