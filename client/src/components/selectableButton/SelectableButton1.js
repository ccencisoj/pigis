import React from 'react';
import clsx from 'clsx';
import styles from './SelectableButton1.module.scss';
import { SELECTABLE_TIMEOUT } from 'contants/common';
import OutsideClickHandler from 'react-outside-click-handler';

class SelectableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectable: false,
      willHiddenSelectable: false
    }
    this.timeout = null;
  }

  hideSelectable = ()=> {
    this.setState({willHiddenSelectable: true});

    this.timeout = setTimeout(()=> {
      this.setState({
        showSelectable: false,
        willHiddenSelectable: false
      });
    }, SELECTABLE_TIMEOUT);
  }

  componentWillUnmount = ()=> {
    clearInterval(this.timeout);
  }

  render = ()=> {
    const { 
      children, 
      label,
      small,
      icon: Icon,
    } = this.props;
    const { willHiddenSelectable, showSelectable } = this.state;

    const Selectable = children({ 
      willHiddenSelectable,
      hideSelectable: this.hideSelectable
    });

    const styles_selectable_button1 = clsx({
      [styles.selectable_button1]: true,
      [styles.small]: small,
      [styles.only_icon]: Icon && !label,
      [styles.show_selectable]: showSelectable,
    });

    return (
      <OutsideClickHandler 
        onOutsideClick={this.hideSelectable}>
        <div className={styles_selectable_button1} 
          onClick={()=> this.setState({showSelectable: true})}>  

          {label && <p className={styles.label}>{label}</p>}
          {Icon && <Icon className={styles.icon}/>}

          {showSelectable && 
          <div className={styles.selectable}>{Selectable}</div>}
        </div>
      </OutsideClickHandler>
    )
  }
}

export default SelectableButton;