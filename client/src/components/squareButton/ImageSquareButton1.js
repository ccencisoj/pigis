import React, { Fragment } from 'react';
import * as Icon from 'react-feather';
import { useStorage } from 'hooks/StorageContext';
import styles from './ImageSquareButton1.module.scss';
import CloseButton1 from 'components/closeButton/CloseButton1';

class ImageSquareButton1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: null};
  }

  loadImage = ()=> {
    const { storage, onChange } = this.props;

    storage.loadImage((_image)=> {
      const image = URL.createObjectURL(_image);
      this.setState({image});
      onChange(image);
    });
  }

  render = ()=> {
    const { label } = this.props;
    const { image } = this.state;

    return (
      <div className={styles.image_square_button1}>
        {image ?
        <Fragment>
          <img className={styles.image} src={image}/>
          <div className={styles.close}>
            <CloseButton1 
              small={true} 
              onClick={()=> this.setState({image: null})}/>
          </div>
        </Fragment> :
        <Fragment>
          <div className={styles.add} 
            onClick={this.loadImage}>
            <Icon.Plus className={styles.icon}/>
            {label && <p className={styles.label}>{label}</p>}
          </div>
        </Fragment>}
      </div>
    )
  }
}

export default (props)=> {
  const storage = useStorage();

  return <ImageSquareButton1 {...props}
    storage={storage}/>
}