import React from 'react';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import styles from './FormNavigation1.module.scss';

class FormNavigation1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { router } = this.props;

    return (
      <div className={styles.form_navigation1}>
        <div className={styles.left}>
          <p className={styles.title}>Pigis</p>
        </div>
        <div className={styles.right}>
          <Button   
            primary={true}
            outline={true}
            label="Soy hijo"
            onClick={()=> router.push("/child/signIn")}/>
          <Button   
            primary={true}
            label="Soy padre"
            onClick={()=> router.push("/parent/signIn")}/>
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const router = useRouter();

  return <FormNavigation1 {...props}
    router={router}/>
}