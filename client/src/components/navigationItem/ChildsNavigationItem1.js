import React from 'react';
import clsx from 'clsx';
import styles from './ChildsNavigationItem1.module.scss';

class ChildsNavigationItem1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { label, selected, onClick } = this.props;

    const styles_childs_navigation_item1 = clsx({
      [styles.childs_navigation_item1]: true,
      [styles.selected]: selected
    }); 

    return (
      <div className={styles_childs_navigation_item1} 
        onClick={onClick}>
        <p className={styles.label}>{label}</p>
        <div className={styles.line}></div>
      </div>
    )
  }
}

export default ChildsNavigationItem1;