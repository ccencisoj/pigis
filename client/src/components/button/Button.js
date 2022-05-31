import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import Loading1 from 'components/loading/Loading1';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      label, 
      icon: Icon,
      expand, 
      flex,
      primary,
      secundary,
      outline,
      blackColor,
      disabled,
      round,
      loading,
      type,
      small,
      onClick
    } = this.props;

    const styles_button = clsx({
      [styles.button]: true,
      [styles.primary]: primary,
      [styles.primary_outline]: primary && outline,
      [styles.secundary]: secundary,
      [styles.secundary_outline]: secundary && outline,
      [styles.expand]: expand,
      [styles.flex]: flex,
      [styles.round]: round,
      [styles.only_icon]: Icon && !label,
      [styles.black_color]: blackColor,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
      [styles.small]: small
    });

    return (
      <button type={type || "button"} 
        className={styles_button} onClick={onClick}>
        {Icon && <Icon className={styles.icon}/>}
        {label && <p className={styles.label}>{label}</p>}
        {loading && <Loading1 light={true}/>}
      </button>
    )
  }
}

export default Button;