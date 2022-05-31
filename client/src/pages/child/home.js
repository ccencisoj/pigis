import React from 'react';
import auth from 'auth';
import { connect } from 'react-redux';
import { LOAD_CHILD } from 'contants/actionTypes';
import { ChildDashboard1 } from 'components/dashboard';
import ChildLayout1 from 'components/layout/ChildLayout1';

const mapActionsToProps = (dispatch)=> ({
  loadChild: (child)=> dispatch({
    type: LOAD_CHILD,
    payload: child
  })
});

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    const { child, loadChild } = this.props;

    if(child) loadChild(child);
  }

  render = ()=> {
    return (
      <ChildLayout1>
        <ChildDashboard1/>
      </ChildLayout1>
    )
  }
}

const ConnectedHome = connect(
  null, mapActionsToProps)(Home);

export default ConnectedHome;

export const getServerSideProps = auth.child({required: true});