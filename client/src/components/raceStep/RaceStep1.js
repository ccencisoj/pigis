import React from 'react';
import { connect } from 'react-redux';
import { STEP2 } from 'contants/common';
import styles from './RaceStep1.module.scss';
import containGreen from 'utils/containGreen';
import { CameraViewer1 } from 'components/cameraViewer';
import { SET_CURRENT_STEP } from 'contants/actionTypes';
import { RaceStepContainer1 } from 'components/stepContainer';

const mapStateToProps = (store)=> ({
  prevStep: store.progress.prevStep,
  currentStep: store.progress.currentStep
});

const mapActionsToProps = (dispatch)=> ({
  setCurrentStep: (step)=> dispatch({
    type: SET_CURRENT_STEP,
    payload: step
  }),
});

class RaceStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.greenCounter = 0;
  }

  handleImageBlocks = (imageBlocks)=> {
    const { setCurrentStep } = this.props;
    const contains = containGreen(imageBlocks);
  
    contains ? this.greenCounter += 1 : this.greenCounter = 0;

    if(this.greenCounter === 10) {      
      setTimeout(()=> {
        setCurrentStep(STEP2);
        console.log("Comienza la carrera");
      }, 300);
    }   
  }

  render = ()=> {
    return (
      <div className={styles.race_step1}>
        <RaceStepContainer1 
          title="Ubica el dispositivo"
          sentence="Ubica la camara de el dispotivo 
          frente a la parte verde de la 
          rueda de la bicicleta">
          <CameraViewer1 
            onImageBlocks={this.handleImageBlocks}/>
        </RaceStepContainer1>
      </div>
    )
  }
}

const ConnectedRaceStep1 = connect(
  mapStateToProps, mapActionsToProps)(RaceStep1);

export default ConnectedRaceStep1;