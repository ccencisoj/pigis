import React from 'react';
import { useRouter } from 'next/router';
import styles from './ChildLayout1.module.scss';
import { useViewport } from 'hooks/ViewportContext';
import { ChildNavigation1 } from 'components/navigation';

class ChildLayout1 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBack = ()=> {
    const { router } = this.props;
    const pathname = router.pathname;

    if(pathname.startsWith("/child/home"))
      return router.push("/child/signIn");

    if(pathname.startsWith("/child/race"))
      return router.push("/child/home");
  }

  render = ()=> {
    const { children, progressBar } = this.props;

    return (
      <div className={styles.child_layout1}>
        <ChildNavigation1 
          onBack={this.handleBack} 
          progressBar={progressBar}/>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const viewport = useViewport();
  const router = useRouter();

  return <ChildLayout1 {...props}
    viewport={viewport}
    router={router}/>
}