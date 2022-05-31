import React from 'react';
import { connect } from 'react-redux';
import { STEP1, STEP2 } from 'contants/common';
import styles from './ProgressBar1.module.scss';
import { SET_CURRENT_STEP } from 'contants/actionTypes';
import { ProgressThumb1 } from 'components/progressThumb';

const mapStateToProps = (store)=> ({
  currentStep: store.progress.currentStep
});

const mapActionsToProps = (dispatch)=> ({
  setCurrentStep: (step)=> dispatch({
    type: SET_CURRENT_STEP,
    payload: step
  })
});

class ProgressBar1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { currentStep } = this.props;

    return (
      <div className={styles.progress_bar1}>
        <ProgressThumb1 fill={currentStep >= STEP1}/>
        <ProgressThumb1 fill={currentStep >= STEP2}/>
      </div>
    )
  }
}

const ConnectedProgressBar1 = connect(
  mapStateToProps, mapActionsToProps)(ProgressBar1);

export default ConnectedProgressBar1;