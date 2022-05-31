import React from 'react';
import agent from 'agent';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import shortenName from 'utils/shortenName';
import { LOAD_PARENT } from 'contants/actionTypes';
import styles from './ParentBarside1.module.scss';
import { useViewport } from 'hooks/ViewportContext';
import { BARSIDE_MODAL_TIMEOUT } from 'contants/common';
import { ActionsFooter1 } from 'components/actionsFooter';
import { ParentBarsideItem1 } from 'components/barsideItem';

const mapStateToProps = (store)=> ({
  parent: store.common.parent
});

const mapActionsToProps = (dispatch)=> ({
  loadParent: (parent)=> dispatch({
    type: LOAD_PARENT,
    payload: parent
  }) 
});

class ParentBarside1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {closingSession: false};
  }

  componentDidMount = ()=> {
    const { loadParent } = this.props;

    agent.Parent.current().then((response)=> {
      const parent = response.data.parent;
      loadParent(parent);

    }).catch((e)=> {
      const error = e.response.data;
      console.log(error);
    });
  }

  closeSession = ()=> {
    const { router } = this.props;

    this.setState({closeSession: true});

    agent.Parent.logout()
    .then((response)=> { 
      router.push("/parent/signIn");
    })
    .catch((e)=> {
      const error = e.response.data;
      console.log(error);
      this.setState({closingSession: false});
    });
  }

  redirectTo = (path)=> {
    const { router, viewport, hideModal } = this.props;
    
    router.push(path).then(()=> {
      setTimeout(()=> {
        !viewport.isDesktop && hideModal(BARSIDE_MODAL_TIMEOUT);
      }, 300);
    });
  }

  render = ()=> {
    const { router, parent, viewport, hideModal } = this.props;
    const { closingSession } = this.state;

    return (
      <div className={styles.parent_barside1}>
        {!viewport.isDesktop &&
        <div className={styles.close}>
          <Button
            blackColor={true}
            icon={Icon.ChevronLeft}
            onClick={()=> hideModal(BARSIDE_MODAL_TIMEOUT)}/>
        </div>}
        <div className={styles.header}>
          <div className={styles.user}>
            <img className={styles.image} src="/image/child1.jpg"/>
            <div className={styles.column}>
              <p className={styles.name}>{shortenName(parent.name)}</p>
              <p className={styles.email}>{parent.email}</p>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <ParentBarsideItem1
            icon={Icon.Home}
            label="Tablero"
            selected={router.pathname.startsWith("/parent/dashboard")}
            onClick={()=> this.redirectTo("/parent/dashboard")}/>
          <ParentBarsideItem1
            selected={true}
            icon={Icon.Users}
            label="Hijos"
            selected={router.pathname.startsWith("/parent/childs")}
            onClick={()=> this.redirectTo("/parent/childs")}/>
          <ParentBarsideItem1
            icon={Icon.Clock}
            label="Historial"
            selected={router.pathname.startsWith("/parent/history")}
            onClick={()=> this.redirectTo("/parent/history")}/>
          <ParentBarsideItem1
            icon={Icon.Settings}
            label="Configuraciones"
            selected={router.pathname.startsWith("/parent/settings")}
            onClick={()=> this.redirectTo("/parent/settings")}/>
        </div>
        <div className={styles.footer}>
          <ActionsFooter1>
            <Button
              expand={true}
              primary={true} 
              loading={closingSession}
              label="Cerrar sesion"
              onClick={this.closeSession}/>
          </ActionsFooter1>
        </div>
      </div>
    )
  }
}

const ConnectedParentBarside1 = connect(
  mapStateToProps, mapActionsToProps)(ParentBarside1);

export default (props)=> {
  const router = useRouter();
  const viewport = useViewport();

  return <ConnectedParentBarside1 {...props}
    router={router}
    viewport={viewport}/>
}