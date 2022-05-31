import React from 'react';
import clsx from 'clsx';
import sound from 'utils/sound';
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import { ModalBase1 } from 'components/modalBase';
import styles from './LostRaceModal1.module.scss';
import { ActionsFooter1 } from 'components/actionsFooter';
import { ModalContainer1 } from 'components/modalContainer';
import { FigureContainer1 } from 'components/figureContainer';

class LostRaceModal1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    sound.lostGame.play();
  }

  render = ()=> {
    const { hideModal, willHiddenModal, router } = this.props;

    const styles_lost_race_modal1 = clsx({
      [styles.lost_race_modal1]: true,
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
        <div className={styles_lost_race_modal1}>
          <FigureContainer1
            title="Has perdido la carrera"
            sentence="No has completado 10 
            minutos en la bicicleta">
            <div className={styles.figure1}>
              <Icon.Frown className={styles.icon}/>
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

export default (props)=> {
  const router = useRouter();

  return <LostRaceModal1 {...props}
    router={router}/>
}