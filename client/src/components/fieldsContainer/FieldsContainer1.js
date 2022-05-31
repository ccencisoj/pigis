import React from 'react';
import clsx from 'clsx';
import styles from './FieldsContainer1.module.scss';

class FieldsContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;
    const fieldsWithLabel = (children.length && children[0].props.label) ? true : false;

    const styles_fields_container1 = clsx({
      [styles.fields_container1]: true,
      [styles.fields_with_label]: fieldsWithLabel
    });    

    return (
      <div className={styles_fields_container1}>
        {children}
      </div>
    )
  }
}

export default FieldsContainer1;