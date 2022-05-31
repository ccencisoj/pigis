import React from 'react';
import { nanoid } from 'nanoid';
import Router from 'next/router';
import { MODAL_TIMEOUT } from 'contants/common';

const ModalsContext = React.createContext({});

const ModalsProvider = (props)=> {
  const { children } = props;
  const [modals, updateModals] = React.useState({});

  const add = (Modal, props, _modalId)=> {
    const modalId = _modalId || nanoid();

    if(modalId in modals) return;

    const WrappedModal = ()=> {
      const [willHiddenModal, setWillHiddenModal] = React.useState(false);

      const hideModal = (timeout)=> {
        setWillHiddenModal(true);

        setTimeout(()=> {
          delete modals[modalId];
          updateModals({...modals});
        }, timeout);
      } 

      React.useEffect(()=> {
        const willChangeRoute = ()=> {
          hideModal(MODAL_TIMEOUT);
        }

        Router.events.on("routeChangeStart", willChangeRoute);
        return ()=> Router.events.off("routeChangeStart", willChangeRoute);
      }, []);

      return <Modal
        {...props}
        willHiddenModal={willHiddenModal} 
        hideModal={hideModal}/>
    }

    modals[modalId] = <WrappedModal key={modalId}/>;
    updateModals({...modals});
  }

  return (
    <ModalsContext.Provider 
      value={{ add }}>
      {children}
      {Object.values(modals)}
    </ModalsContext.Provider>
  )
}

const useModals = ()=> {
  return React.useContext(ModalsContext);
}

export { ModalsProvider, useModals };