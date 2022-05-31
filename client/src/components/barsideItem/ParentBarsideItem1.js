import clsx from 'clsx';
import React from 'react';
import styles from './ParentBarsideItem1.module.scss';

class ParentBarsideItem1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      icon: Icon, 
      label,
      selected,
      onClick 
    } = this.props;

    const styles_parent_barside_item1 = clsx({
      [styles.parent_barside_item1]: true,
      [styles.selected]: selected
    });

    return (
      <div className={styles_parent_barside_item1} 
        onClick={onClick}>
        <Icon className={styles.icon}/>
        <p className={styles.label}>{label}</p>
        <div className={styles.line}></div>
      </div>
    )
  }
}

export default ParentBarsideItem1;