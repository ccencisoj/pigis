import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import { saveChild } from 'utils/childsManager';
import { ChildSignInForm1 } from 'components/form';
import { recoverChilds } from 'utils/childsManager';
import { ChildFormBarside1 } from 'components/barside';
import FormLayout1 from 'components/layout/FormLayout1';
import { LOAD_CHILD_LIST } from 'contants/actionTypes';

const mapActionsToProps = (dispatch)=> ({
  loadChildList: (childList)=> dispatch({
    type: LOAD_CHILD_LIST,
    payload: childList
  })
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    const { router } = this.props;
    const query = queryString.parseUrl(router.asPath).query;
  
    if(query.code) {
      agent.Child.login({code: query.code})
      .then((response)=> {
        const child = response.data.child;
        saveChild(child);
        router.push("/child/home");
      })
      .catch((e)=> {
        const error = e.response.error;
        console.log(error);
      });
    }
  }

  componentDidMount = ()=> {
    const childList = recoverChilds();
    this.props.loadChildList(childList);
  }

  render = ()=> {
    return (
      <FormLayout1 barside={ChildFormBarside1}>
        <ChildSignInForm1/>
      </FormLayout1>
    )
  }
}

const ConnectedSignIn = connect(
  null, mapActionsToProps)(SignIn);

export default (props)=> {
  const router = useRouter();

  return <ConnectedSignIn {...props}
    router={router}/>
}