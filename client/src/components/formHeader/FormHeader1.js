import React from 'react';
import styles from './FormHeader1.module.scss';

class FormHeader1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { title, sentence } = this.props;

    return (
      <div className={styles.form_header1}>
        {title && <p className={styles.title}>{title}</p>}
        {sentence && <p className={styles.sentence}>{sentence}</p>}
      </div>
    )
  }
}

export default FormHeader1;