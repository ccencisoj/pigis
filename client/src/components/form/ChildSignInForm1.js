import React from 'react';
import { connect } from 'react-redux';
import { useViewport } from 'hooks/ViewportContext';
import FormHeader1 from 'components/formHeader/FormHeader1';
import { FormContainer1 } from 'components/formContainer';
import AccountCard1 from 'components/accountCard/AccountCard1';
import AddAccountField1 from 'components/field/AddAccountField1';
import { AccountsContainer1 } from 'components/accountsContainer';
import { clearChilds, recoverChilds } from 'utils/childsManager';

const mapStateToProps = (store)=> ({
  childList: store.collections.childList
});

class ChildSignInForm1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { viewport, childList } = this.props;

    return (
      <FormContainer1 
        expand={viewport.width <= 1140 && viewport.isDesktop}>
        <FormHeader1
          sentence={childList.length ? 
          "Selecciona una cuenta" : "Agrega una cuenta"}/>
        <AccountsContainer1>
          {childList.map((child)=>
          <AccountCard1 key={child.id} {...child}/>)}
          <AddAccountField1
            placeholder="Codigo de cuenta"/>
        </AccountsContainer1>
      </FormContainer1>
    )
  }
}

const ConnectedChildSignInForm1 = connect(
  mapStateToProps, null)(ChildSignInForm1);

export default (props)=> {
  const viewport = useViewport();

  return <ConnectedChildSignInForm1 {...props}
    viewport={viewport}/>
}