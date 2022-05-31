import clsx from 'clsx';
import React from 'react';
import styles from './FormContainer1.module.scss';

class FormContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      children,
      expand 
    } = this.props;

    const styles_form_container1 = clsx({
      [styles.form_container1]: true,
      [styles.expand]: expand
    });

    return (
      <div className={styles_form_container1}>
        {children}
      </div>
    )
  }
}

export default FormContainer1;