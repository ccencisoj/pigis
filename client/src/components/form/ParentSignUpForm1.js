import React from 'react';
import types from 'types';
import agent from 'agent';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import Field from 'components/field/Field';
import Button from 'components/button/Button';
import { useViewport } from 'hooks/ViewportContext';
import styles from './ParentSignUpForm1.module.scss';
import { FormContainer1 } from 'components/formContainer';
import FormHeader1 from 'components/formHeader/FormHeader1';
import { ActionsFooter1 } from 'components/actionsFooter';
import { FooterQuestion1 } from 'components/footerQuestion';
import { FieldsContainer1 } from 'components/fieldsContainer';

const validationSchema = yup.object({
  name: types.Name.required(),
  email: types.Email.required(),
  password: types.Password.required()
});

class ParentSignUpForm1 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = ({name, email, password}, {setSubmitting})=> {
    const { router } = this.props;

    agent.Parent.create({ name, email, password })
    .then((response)=> {
      router.push("/parent/dashboard");
    })
    .catch((e)=> {
      const error = e.response.data;
      console.log(error);
      setSubmitting(false);
    });
  }

  render = ()=> {
    const {
      viewport
    } = this.props;

    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        })=> (
          <FormContainer1 >
            <form className={styles.parent_sign_up_form1}
              onSubmit={handleSubmit}>
              <FormHeader1
                title="Crear cuenta"
                sentence="Completa los siguientes 
                campos para crear una cuenta"/>
              <FieldsContainer1>
                <Field
                  value={values.name}
                  error={touched.name ? errors.name : ""}
                  name="name"
                  label="Nombre"
                  placeholder="luis"
                  onBlur={handleBlur}
                  onChange={handleChange}/>
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
                  expand={viewport.isMobile}
                  primary={true}
                  loading={isSubmitting}
                  label="Crear cuenta"/>
              </ActionsFooter1>
              <FooterQuestion1 
                question="Ya tienes una cuenta?"
                action="iniciar sesion"
                href="/parent/signIn"/>
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

  return <ParentSignUpForm1 {...props}
    viewport={viewport}
    router={router}/>
}