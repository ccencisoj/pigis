import React, { createRef } from 'react';
import clsx from 'clsx';
import { useCamera } from 'hooks/CameraContext';
import styles from './CameraViewer1.module.scss';

class CameraViewer1 extends React.Component {
  constructor(props) {
    super(props);
    this.ref = {
      video: createRef(),
      canvas: createRef()
    };
  }

  componentDidMount = ()=> {
    const { camera, onImageBlocks, interval } = this.props;
    const video = this.ref.video.current;

    camera.getUserMedia()  
    .then(({ mediaStream })=> {

      camera.loadMediaStream(mediaStream, video)
      .then(({ takePhoto })=> {

        setInterval(()=> {
          const imageBlocks = takePhoto({returnImageBlocks: true});
          onImageBlocks && onImageBlocks(imageBlocks); 
        }, interval || 200);
      });
    });
  }

  render = ()=> {
    const { hidden } = this.props;

    const styles_camera_viewer1 = clsx({
      [styles.camera_viewer1]: true,
      [styles.hidden]: hidden 
    });

    return (
      <div className={styles_camera_viewer1}>
        <video autoPlay 
          ref={this.ref.video} 
          className={styles.video}/>
      </div>
    )
  }
}

export default (props)=> {
  const camera = useCamera();

  return <CameraViewer1 
    {...props} 
    camera={camera}/>;
}