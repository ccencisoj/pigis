import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import styles from './RaceStep2.module.scss';
import Countdown2 from 'components/countdown/Countdown2';
import { RaceStepContainer1 } from 'components/stepContainer';

const mapStateToProps = (store)=> ({
  prevStep: store.progress.prevStep,
  currentStep: store.progress.currentStep
});

class RaceStep2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { router } = this.props;

    return (
      <div className={styles.race_step2}>
        <RaceStepContainer1
          title="Comienza a calentar"
          sentence="Subete a la bicicleta y 
          comienza a calentar, la carrera 
          pronto comenzara">
          <Countdown2 onEnd={()=> 
            router.push("/child/race")}/>
        </RaceStepContainer1>
      </div>
    )
  }
}

const ConnectedRaceStep2 = connect(
  mapStateToProps, null)(RaceStep2);

export default (props)=> {
  const router = useRouter();

  return <ConnectedRaceStep2 {...props}
    router={router}/>
}