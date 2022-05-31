import React from 'react';
import { ParentSignUpForm1 } from 'components/form';
import FormLayout1 from 'components/layout/FormLayout1';
import { ParentFormBarside1 } from 'components/barside';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    return (
      <FormLayout1 barside={ParentFormBarside1}>
        <ParentSignUpForm1/>
      </FormLayout1>
    )
  }
}

export default SignUp;