import React from 'react';
import clsx from 'clsx';
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import { useViewport } from 'hooks/ViewportContext';
import styles from './ChildNavigation1.module.scss';

class ChildNavigation1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { 
      viewport, 
      router, 
      sticky,
      onBack,
      progressBar: ProgressBar
    } = this.props;

    const styles_child_navigation1 = clsx({
      [styles.child_navigation1]: true,
      [styles.sticky]: !viewport.isDesktop || sticky,
      [styles.progress_bar]: ProgressBar
    });

    return (
      <div className={styles_child_navigation1}>
        <div className={styles.left}>
          <Button
            blackColor={true}
            icon={Icon.ChevronLeft}
            onClick={()=> onBack ? onBack() : router.back()}/>
        </div>
        <div className={styles.right}>

        </div>
        <div className={styles.progress}>
          {ProgressBar && <ProgressBar/>}
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const viewport = useViewport();
  const router = useRouter();

  return <ChildNavigation1 {...props}
    viewport={viewport}
    router={router}/>
}