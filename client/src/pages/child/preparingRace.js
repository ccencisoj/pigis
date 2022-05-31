import React from 'react';
import { connect } from 'react-redux';
import { STEP2 } from 'contants/common';
import { ProgressBar1 } from 'components/progressBar';
import ChildLayout1 from 'components/layout/ChildLayout1';
import { PreparingRaceBlock1 } from 'components/raceBlock';
import { RESTART_PREPARING_RACE_PAGE, SET_CURRENT_STEP } from 'contants/actionTypes';

const mapActionsToProps = (dispatch)=> ({
  restartPreparingRacePage: ()=> dispatch({
    type: RESTART_PREPARING_RACE_PAGE
  }),

  setCurrentStep: (step)=> dispatch({
    type: SET_CURRENT_STEP,
    payload: step
  })
});

class PreparingRace extends React.Component {
  constructor(props) {
    super(props);
    this.props.restartPreparingRacePage();
  }

  componentDidMount = ()=> {
    document.addEventListener("contextmenu", ()=> {
      this.props.setCurrentStep(STEP2);
    })
  }

  render = ()=> {
    return (
      <ChildLayout1 progressBar={ProgressBar1}>
        <PreparingRaceBlock1/>
      </ChildLayout1>
    )
  }
}

const ConnectedPreparingRace = connect(
  null, mapActionsToProps)(PreparingRace);

export default ConnectedPreparingRace;