import React from 'react';
import { connect } from 'react-redux';
import styles from './CounterBlock1.module.scss';
import raceTimeToString from 'utils/raceTimeToString';

const mapStateToProps = (store)=> ({
  raceTime: store.common.raceTime
});

class CounterBlock1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0
    }
  }

  componentDidMount = ()=> {
    const { raceTime, onEnd } = this.props;

    const interval = setInterval(()=> {
      this.setState((prevState)=> {
        let seconds = prevState.seconds + 1;
        let minutes = prevState.minutes;

        if(seconds >= 60) {
          seconds = 0;
          minutes += 1;
        }

        if(minutes > 60)
          minutes = 0;

        if(this.props.pause) {
          clearInterval(interval);
          return {};
        }

        if(minutes === raceTime) {
          clearInterval(interval);
          onEnd();
          return {};  
        }

        return {seconds, minutes};
      });
    }, 1000);
  }

  addZero = (value)=> {
    return "0".repeat(2 - String(value).length) + String(value);
  }

  render = ()=> {
    const { raceTime } = this.props;
    const { seconds, minutes } = this.state;

    return (
      <div className={styles.counter_block1}>
        <div className={styles.container}>
          <p className={styles.counter}>
            {this.addZero(minutes)}:
            {this.addZero(seconds)}
          </p>
          <div className={styles.objetive}>
            <p className={styles.label}>Objetivo</p>
            <p className={styles.value}>{raceTimeToString(raceTime)}</p>  
          </div>        
        </div>
      </div>
    )
  }
}

const ConnectedCounterBlock1 = connect(
  mapStateToProps, null)(CounterBlock1);

export default ConnectedCounterBlock1;