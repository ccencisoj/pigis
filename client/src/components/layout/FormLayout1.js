import React from 'react';
import styles from './FormLayout1.module.scss';
import { useViewport } from 'hooks/ViewportContext';
import { FormNavigation1 } from 'components/navigation';

class FormLayout1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      children, 
      barside: Barside,
      viewport 
    } = this.props;

    return (
      <div className={styles.form_layout1}>
        {viewport.isDesktop && <Barside/>}
        <div className={styles.column}>
          <FormNavigation1/>
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

  return <FormLayout1 {...props}
    viewport={viewport}/>
}