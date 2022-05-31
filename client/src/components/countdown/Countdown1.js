import React from 'react';
import styles from './Countdown1.module.scss';

class Countdown1 extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {counter: 10};
  }

  componentDidMount = ()=> {
    const { onEnd } = this.props;

    this.interval = setInterval(()=> {
      this.setState(({counter})=> {

        if((counter - 1) < 0) {
          clearInterval(this.interval);
          onEnd();
          return {};
        }

        return {counter: counter - 1};
      });
    }, 1000);
  }

  componentWillUnmount = ()=> {
    if(this.interval) clearInterval(this.interval);
  }
  
  render = ()=> {
    const { counter } = this.state;

    return (
      <p className={styles.countdown1}>
        La carrera comenzara en: {counter}s</p>
    )
  }
}

export default Countdown1;