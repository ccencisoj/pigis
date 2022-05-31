import React from 'react';
import Button from 'components/button/Button';
import styles from './ChildActions1.module.scss';
import { useModals } from 'hooks/ModalsContext';
import { AddChildModal1 } from 'components/modal';

class ChildActions1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { modals } = this.props;

    return (
      <div className={styles.child_actions1}>
        <Button
          small={true}
          primary={true}
          label="Agregar hijo"
          onClick={()=> modals.add(AddChildModal1, {})}/>
      </div>
    )
  }
}

export default (props)=> {
  const modals = useModals();

  return <ChildActions1 {...props}
    modals={modals}/>
}