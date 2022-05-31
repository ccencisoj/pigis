import React from 'react';
import sound from 'utils/sound';
import { useRouter } from 'next/router';
import styles from './Countdown2.module.scss';

class Countdown2 extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {counter: 9};
  }

  componentDidMount = ()=> {
    const { onEnd } = this.props;

    sound.beep.play();

    this.interval = setInterval(()=> {
      sound.beep.play();

      this.setState((prevState)=> {
        let counter = prevState.counter - 1;

        if(counter === 0) {
          sound.beep.play();
          clearInterval(this.interval);
          onEnd();
        }

        return { counter };
      });
    }, 1000);
  }

  componentWillUnmount = ()=> {
    clearInterval(this.interval);
  }

  render = ()=> {
    const { counter } = this.state;

    return (
      <div className={styles.countdown2}>
        <p className={styles.counter}>{counter}</p>
      </div>
    )
  }
}

export default (props)=> {
  const router = useRouter();

  return <Countdown2 {...props}
    router={router}/>
}