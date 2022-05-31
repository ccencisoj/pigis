import React from 'react';
import { connect } from 'react-redux';
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import styles from './RaceBlock1.module.scss';
import { SET_RACE_TIME } from 'contants/actionTypes';
import { Selectable1 } from 'components/selectable';
import raceTimeToString from 'utils/raceTimeToString';
import { SelectableItem1 } from 'components/selectableItem';
import { SelectableButton1 } from 'components/selectableButton';
import { FIVE_MINUTES, ONE_MINUTE, TEN_MINUTES, THIRTY_MINUTES, TWENTY_MINUTES } from 'contants/common';

const mapStateToProps = (store)=> ({
  raceTime: store.common.raceTime
});

const mapActionsToProps = (dispatch)=> ({
  setRaceTime: (raceTime)=> dispatch({
    type: SET_RACE_TIME,
    payload: raceTime
  })
});

class RaceBlock1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    const { router } = this.props;

    router.prefetch("/child/race");
  }

  render = ()=> {
    const { router, raceTime, setRaceTime } = this.props;

    return (
      <div className={styles.race_block1}>
        <p className={styles.title}>
          Inicia una carrera y gana dinero
        </p>
        <div className={styles.action}>
          <Button 
            primary={true}
            label="Iniciar carrera"
            onClick={()=> router.push("/child/preparingRace")}/>
          <SelectableButton1 
            label={raceTimeToString(raceTime)}
            icon={Icon.ChevronDown}>
            {({ hideSelectable, willHiddenSelectable })=> (
              <Selectable1 
                hideSelectable={hideSelectable}
                willHiddenSelectable={willHiddenSelectable}>
                <SelectableItem1 
                  label="1 minuto" 
                  onClick={()=> setRaceTime(ONE_MINUTE)}/>
                <SelectableItem1 
                  label="5 minutos" 
                  onClick={()=> setRaceTime(FIVE_MINUTES)}/>
                <SelectableItem1 
                  label="10 minutos" 
                  onClick={()=> setRaceTime(TEN_MINUTES)}/>
                <SelectableItem1 
                  label="20 minutos"
                  onClick={()=> setRaceTime(TWENTY_MINUTES)}/>
                <SelectableItem1 
                  label="30 minutos"
                  onClick={()=> setRaceTime(THIRTY_MINUTES)}/>
              </Selectable1>
            )}
          </SelectableButton1>
        </div>
      </div>
    )
  }
}

const ConnectedRaceBlock1 = connect(
  mapStateToProps, mapActionsToProps)(RaceBlock1);

export default (props)=> {
  const router = useRouter();

  return <ConnectedRaceBlock1 {...props}
    router={router}/>
}