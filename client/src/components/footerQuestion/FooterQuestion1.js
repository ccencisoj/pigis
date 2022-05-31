import React from 'react';
import Link from 'next/link';
import styles from './FooterQuestion1.module.scss';

class FooterQuestion1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { question, action, href } = this.props;

    return (
      <div className={styles.footer_question1}>
        <p className={styles.question}>{question} </p>
        <Link href={href}>
          <button className={styles.action}>{action}</button>
        </Link>
      </div>
    )
  }
}

export default FooterQuestion1;