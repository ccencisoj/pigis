import React from 'react';
import * as yup from 'yup';
import types from 'types';
import agent from 'agent';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import Field from 'components/field/Field';
import Button from 'components/button/Button';
import { useViewport } from 'hooks/ViewportContext';
import styles from './ParentSignInForm1.module.scss';
import { FormContainer1 } from 'components/formContainer';
import FormHeader1 from 'components/formHeader/FormHeader1';
import { ActionsFooter1 } from 'components/actionsFooter';
import { FooterQuestion1 } from 'components/footerQuestion';
import { FieldsContainer1 } from 'components/fieldsContainer';

const validationSchema = yup.object({
  email: types.Email.required(),
  password: types.Password.required()
});

class ParentSignInForm1 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = ({email, password}, {setSubmitting})=> {
    const { router } = this.props;

    agent.Parent.login({ email, password })
    .then((response)=> {
      router.push("/parent/dashboard");
    })
    .catch((e)=> {
      const error = e.response.data;
      setSubmitting(false);
    });
  }

  render = ()=> {
    return (
      <Formik 
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}>
          {({
            isSubmitting,
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
            handleChange
          })=> (
            <FormContainer1>
              <form className={styles.parent_sign_in_form1}
              onSubmit={handleSubmit}>
                <FormHeader1
                  title="Iniciar sesion"
                  sentence="Completa los siguientes 
                  campos para ingresar a su cuenta"/>
                <FieldsContainer1>
                  <Field
                    value={values.email}
                    error={touched.email ? errors.email : ""}
                    name="email"
                    label="Correo"
                    placeholder="luis@gmail.com"
                    onBlur={handleBlur}
                    onChange={handleChange}/>
                  <Field
                    type="password"
                    value={values.password}
                    error={touched.password ? errors.password : ""}
                    name="password"
                    label="Contraseña"
                    placeholder="****"
                    onBlur={handleBlur}
                    onChange={handleChange}/>
                </FieldsContainer1>
                <ActionsFooter1>
                  <Button
                    type="submit"
                    expand={true}
                    primary={true}
                    loading={isSubmitting}
                    label="Continuar"/>
                </ActionsFooter1>
                <FooterQuestion1 
                  question="No tienes una cuenta?"
                  action="crear cuenta"
                href="/parent/signUp"/>
              </form>
            </FormContainer1>
          )}
      </Formik>
    )
  }
}

export default (props)=> {
  const viewport = useViewport();
  const router = useRouter();

  return <ParentSignInForm1 {...props}
    viewport={viewport}
    router={router}/>
}