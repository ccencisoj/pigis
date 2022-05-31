import React from 'react';
import clsx from 'clsx';
import sound from 'utils/sound';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import { ModalBase1 } from 'components/modalBase';
import styles from './WinnedRaceModal1.module.scss';
import { ActionsFooter1 } from 'components/actionsFooter';
import { ModalContainer1 } from 'components/modalContainer';
import { FigureContainer1 } from 'components/figureContainer';

const mapStateToProps = (store)=> ({
  raceTime: store.common.raceTime  
});

class WinnedRaceModal1 extends React.Component {
  constructor(props) {
    super(props);
    sound.winnedGame.play();
  }

  render = ()=> {
    const { 
      hideModal, 
      willHiddenModal, 
      router,
      raceTime 
    } = this.props;

    const styles_winned_race_modal1 = clsx({
      [styles.winned_race_modal1]: true,
      [styles.will_hidden_modal]: willHiddenModal
    });

    return (
      <ModalBase1
        hideModal={hideModal}
        willHiddenModal={willHiddenModal}>
        <ModalContainer1
          onClose={()=> router.push("/child/home")}
          hideModal={hideModal}
          willHiddenModal={willHiddenModal}>
          <div className={styles_winned_race_modal1}>
            <FigureContainer1
              title="Has ganado la carrera"
              sentence="Has completado 10 
              minutos en la bicicleta">
              <div className={styles.figure1}>
                <p className={styles.sentence1}>+{100 * raceTime}</p>
                <p className={styles.sentence2}>Pesos</p>
              </div>
            </FigureContainer1>
            <ActionsFooter1 wrap={true}>
              <Button
                expand={true}
                primary={true}
                label="Otra vez"
                onClick={()=> router.push("/child/preparingRace")}/>
              <Button
                expand={true}
                label="Salir"
                onClick={()=> router.push("/child/home")}/>
            </ActionsFooter1>
          </div>
        </ModalContainer1>
      </ModalBase1>
    )
  }
}

const ConnectedWinnedRaceModal1 = connect(
  mapStateToProps, null)(WinnedRaceModal1);

export default (props)=> {
  const router = useRouter();

  return <ConnectedWinnedRaceModal1 {...props}
    router={router}/>
}