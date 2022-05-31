import React from 'react';
import agent from 'agent';
import * as Icon from 'react-feather';
import { connect } from 'react-redux';
import styles from './ChildCard1.module.scss';
import { useModals } from 'hooks/ModalsContext';
import { DELETE_CHILD } from 'contants/actionTypes';
import { Selectable1 } from 'components/selectable';
import { SelectableItem1 } from 'components/selectableItem';
import { SelectableButton1 } from 'components/selectableButton';
import AccessLinkModal1 from 'components/modal/AccessLinkModal1';

const mapActionsToProps = (dispatch)=> ({
  deleteChild: (child)=> dispatch({
    type: DELETE_CHILD,
    payload: child
  })
});

class ChildCard1 extends React.Component {
  constructor(props) {
    super(props);
  }

  generateLink = ()=> {
    const { id: childId, modals } = this.props;

    const link = `${window.location.origin}/child/signIn?code=${childId}`;

    modals.add(AccessLinkModal1, {link});
  }

  deleteChild = ()=> {
    const { id: childId, deleteChild } = this.props;

    agent.Parent.deleteChild(childId).then(()=> {
      deleteChild({id: childId});
    })  
    .catch((e)=> {
      const error = e.response.data;
      console.log(error);
    });
  }

  render = ()=> {
    const { image, name, burnedCalories } = this.props;

    return (
      <div className={styles.child_card1}>
        <img className={styles.image} src={image.url}/>
        <div className={styles.column}>
          <p className={styles.name}>{name}</p>
          <p className={styles.burned_calories}>{burnedCalories}</p>
        </div>
        <div className={styles.actions}>
          <SelectableButton1 icon={Icon.MoreHorizontal}>
            {({hideSelectable, willHiddenSelectable})=> (
              <Selectable1 
                hideSelectable={hideSelectable}
                willHiddenSelectable={willHiddenSelectable}>
                <SelectableItem1 
                  icon={Icon.Link2}
                  label="Generar link de acceso"
                  onClick={this.generateLink}/>
                <SelectableItem1 
                  icon={Icon.Trash}
                  label="Eliminar"
                  variant="delete"
                  onClick={this.deleteChild}/>
              </Selectable1>
            )}
          </SelectableButton1>
        </div>
      </div>
    )
  }
}

const ConnectedChildCard1 = connect(
  null, mapActionsToProps)(ChildCard1);

export default (props)=> {
  const modals = useModals();
  
  return <ConnectedChildCard1 {...props}
    modals={modals}/>
}