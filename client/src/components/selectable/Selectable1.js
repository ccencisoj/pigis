import React from 'react';
import clsx from 'clsx';
import styles from './Selectable1.module.scss';

class Selectable1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      children,
      willHiddenSelectable, 
      hideSelectable 
    } = this.props;

    const styles_selectable1 = clsx({
      [styles.selectable1]: true,
      [styles.will_hidden_selectable]: willHiddenSelectable
    });

    return (
      <div className={styles_selectable1} 
        onClick={hideSelectable}>
        {children}
      </div>
    )
  }
}

export default Selectable1;