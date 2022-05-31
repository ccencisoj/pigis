import React from 'react';
import styles from './ImageContainer1.module.scss';

class ImageContainer1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { children } = this.props;

    return (
      <div className={styles.image_container1}>
        {children}
      </div>
    )
  }
}

export default ImageContainer1;