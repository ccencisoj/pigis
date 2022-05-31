import React from 'react';
import clsx from 'clsx';
import styles from './SelectableItem1.module.scss';

class SelectableItem1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      label,
      icon: Icon, 
      onClick, 
      selected,
      variant
    } = this.props;

    const styles_selectable_item1 = clsx({
      [styles.selectable_item1]: true,
      [styles.selected]: selected,
      [styles.variant_delete]: variant === "delete"
    });

    return (
      <div className={styles_selectable_item1} 
        onClick={onClick}>
        {Icon && <Icon className={styles.icon}/>}
        <p className={styles.label}>{label}</p>
      </div>
    )
  }
}

export default SelectableItem1;