import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { STEP1, STEP2 } from 'contants/common';
import { useViewport } from 'hooks/ViewportContext';
import RaceStep1 from 'components/raceStep/RaceStep1';
import RaceStep2 from 'components/raceStep/RaceStep2';
import styles from './PreparingRaceBlock1.module.scss';

const mapStateToProps = (store)=> ({
  currentStep: store.progress.currentStep
});

const mapActionsToProps = (dispatch)=> ({
  
});

class PreparingRaceBlock1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    const { router } = this.props;
    router.prefetch("/child/race");
  }

  render = ()=> {
    const { currentStep } = this.props;

    return (
      <div className={styles.preparing_race_block1}>
        {currentStep === STEP1 &&
        <RaceStep1/>}
        {currentStep === STEP2 &&
        <RaceStep2/>}
      </div>
    )
  }
}

const ConnectedPreparingRaceBlock1 = connect(
  mapStateToProps, mapActionsToProps)(PreparingRaceBlock1);

export default (props)=> {
  const viewport = useViewport();
  const router = useRouter();

  return <ConnectedPreparingRaceBlock1 {...props}
    viewport={viewport}
    router={router}/>
}