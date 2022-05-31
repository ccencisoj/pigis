import React from 'react';
import styles from './Field.module.scss';
import { FieldContainer1 } from 'components/fieldContainer';

class Field extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const {
      type, 
      label, 
      name,
      value,
      error, 
      onBlur,
      onChange,
      placeholder 
    } = this.props;

    return (
      <FieldContainer1 label={label}>
        <div className={styles.field}>
          <input type={type || "text"}
            role="presentation" 
            autoComplete="off" 
            name={name}
            value={value}
            placeholder={placeholder} 
            className={styles.input}
            onBlur={onBlur}
            onChange={onChange}/>
          <p className={styles.error}>{error}</p>
        </div>
      </FieldContainer1>
    )
  }
}

export default Field;