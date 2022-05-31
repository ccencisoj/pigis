import React from 'react';
import types from 'types';
import * as yup from 'yup';
import agent from 'agent';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import Button from 'components/button/Button';
import { useViewport } from 'hooks/ViewportContext';
import styles from './AddAccountField1.module.scss';
import { LOAD_CHILD_LIST } from 'contants/actionTypes';
import { recoverChilds, saveChild } from 'utils/childsManager';

const mapActionsToProps = (dispatch)=> ({
  loadChilds: (childList)=> dispatch({
    type: LOAD_CHILD_LIST,
    payload: childList
  })
});

class AddAccountField1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = ()=> {
    const { router } = this.props;

    router.prefetch("/child/home");
  }

  addAccount = ({code}, {setErrors, setValues})=> {
    const { router, loadChilds } = this.props;

    agent.Child.login({code}).then((response)=> {
      const child = response.data.child;
      saveChild(child);

      const childList = recoverChilds();
      loadChilds(childList);

      setValues({code: ""});

      router.push("/child/home");
    })
    .catch((e)=> {
      const error = e.response.data;
      setErrors({code: error.message});
    });
  }

  render = ()=> {
    const { placeholder, viewport } = this.props;

    return (
      <Formik
        initialValues={{code: ""}}
        initialStatus={{error: ""}}
        onSubmit={this.addAccount}>
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          handleBlur
        })=> (
          <form className={styles.add_account_field1}
            onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input type="text" 
                name="code"
                role="presentation"
                autoComplete="off"
                value={values.code}
                className={styles.input} 
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}/>
              <div className={styles.actions}>
                {viewport.isMobile ?
                <Button 
                  type="submit"
                  icon={Icon.Plus}
                  primary={true}/> :
                <Button 
                  type="submit"
                  primary={true}
                  label="Agregar cuenta"/>}
              </div>
            </div>
            <p className={styles.error}>
              {errors.code}</p>
          </form>
        )}
      </Formik>
    )
  }
}

const ConnectedAddAccountField1 = connect(
  null, mapActionsToProps)(AddAccountField1);

export default (props)=> {
  const viewport = useViewport();
  const router = useRouter();

  return <ConnectedAddAccountField1 {...props}
    viewport={viewport}
    router={router}/>
}