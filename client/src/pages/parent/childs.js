import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';
import { useModals } from 'hooks/ModalsContext';
import { LOAD_CHILD_LIST } from 'contants/actionTypes';
import { ChildCard1 } from 'components/childCard';
import { ChildsNavigation1 } from 'components/navigation';
import ParentLayout1 from 'components/layout/ParentLayout1';
import { ChildsContainer1 } from 'components/childsContainer';

const mapStateToProps = (store)=> ({
  childList: store.collections.childList
});

const mapActionsToProps = (dispatch)=> ({
  loadChildList: (childList)=> dispatch({
    type: LOAD_CHILD_LIST,
    payload: childList
  })
});

class Childs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    const { loadChildList, modals } = this.props;

    agent.Parent.getChildList().then((response)=> {
      const childList = response.data.childList;
      loadChildList(childList);
    })
    .catch((e)=> {
      const error = e.response.data;
      console.log(error);
    });
  }

  render = ()=> {
    const { childList } = this.props;
      
    return (
      <ParentLayout1 
        secundaryNavigation={ChildsNavigation1}>
        <ChildsContainer1>
          {childList.map((child)=> 
          <ChildCard1 key={child.id} {...child}/>)}
        </ChildsContainer1>
      </ParentLayout1>
    )
  }
}

const ConnectedChilds = connect(
  mapStateToProps, mapActionsToProps)(Childs);

export default (props)=> {
  const modals = useModals();

  return <ConnectedChilds {...props}
    modals={modals}/>
}