import clsx from 'clsx';
import React from 'react';
import styles from './TabletField1.module.scss';

class TabletField1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const {  
      image,
      value,
      variant,
      bold
    } = this.props;

    const styles_tablet_field1 = clsx({
      [styles.tablet_field1]: true,
      [styles.bold]: bold,
      [styles.variant_failled_state]: variant === "failledState",
      [styles.variant_success_state]: variant === "successState"
    });

    return (
      <div className={styles_tablet_field1}>
        {image && <img className={styles.image} src={image}/>}
        <p className={styles.value}>{value}</p>
      </div>
    )
  }
}

export default TabletField1;