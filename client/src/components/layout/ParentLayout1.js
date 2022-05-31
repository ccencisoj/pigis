import React from 'react';
import styles from './ParentLayout1.module.scss';
import { ParentBarside1 } from 'components/barside';
import { useViewport } from 'hooks/ViewportContext';
import ParentNavigation1 from 'components/navigation/ParentNavigation1';

class ParentLayout1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    document.body.style.backgroundColor = "#fafaff";
  }
  
  componentWillUnmount = ()=> {
    document.body.style.backgroundColor = "#fff";
  }

  render = ()=> {
    const { 
      children,
      viewport,
      secundaryNavigation: SecundaryNavigation 
    } = this.props;

    return (
      <div className={styles.parent_layout1}>
        {viewport.isDesktop && 
        <ParentBarside1/>}
        {!viewport.isDesktop && 
        <ParentNavigation1/>}
        <div className={styles.column}>
          {SecundaryNavigation &&
          <div className={styles.secundary_navigation}>
            <SecundaryNavigation/>
          </div>}
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const viewport = useViewport();

  return <ParentLayout1 {...props}
    viewport={viewport}/>
}