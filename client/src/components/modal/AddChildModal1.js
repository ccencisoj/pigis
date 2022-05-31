import React from 'react';
import * as yup from 'yup';
import agent from 'agent';
import types from 'types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import Field from 'components/field/Field';
import Button from 'components/button/Button';
import { MODAL_TIMEOUT } from 'contants/common';
import { ADD_CHILD } from 'contants/actionTypes';
import styles from './AddChildModal1.module.scss';
import { ActionsFooter1 } from 'components/actionsFooter';
import ModalBase1 from 'components/modalBase/ModalBase1';
import { ModalContainer1 } from 'components/modalContainer';
import { FieldContainer1 } from 'components/fieldContainer';
import { FieldsContainer1 } from 'components/fieldsContainer';
import { ImageSquareButton1 } from 'components/squareButton';

const validationSchema = yup.object({
  name: types.Name.required()
});

const mapActionsToProps = (dispatch)=> ({
  addChild: (child)=> dispatch({
    type: ADD_CHILD,
    payload: child
  })
});

class AddChildModal1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: null};
  }

  handleSubmit = ({name}, {setSubmitting})=> {
    const { hideModal, addChild } = this.props;
    const { image } = this.state;

    agent.Parent.createChild({name, image})
    .then((response)=> {
      const child = response.data.child;
      hideModal(MODAL_TIMEOUT);
      addChild(child);
    })
    .catch((e)=> {
      const error = e.response.data;
      setSubmitting(false);
      console.log(error);
    });
  }

  render = ()=> {
    const { hideModal, willHiddenModal } = this.props;

    return (
      <ModalBase1 
        hideModal={hideModal} 
        willHiddenModal={willHiddenModal}>
        <Formik
          initialValues={{name: ""}}
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
            <ModalContainer1 
              title="Agregar hijo"
              hideModal={hideModal}
              willHiddenModal={willHiddenModal}>
              <form className={styles.form}
                onSubmit={handleSubmit}>
                <FieldsContainer1>
                  <Field
                    value={values.name}
                    error={touched.name ? errors.name : ""}
                    name="name"
                    label="Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Ejemplo: luis"/>
                  <FieldContainer1
                    label="Foto">
                    <ImageSquareButton1
                      onChange={(image)=> this.setState({image})}/>
                  </FieldContainer1>
                </FieldsContainer1>
                <ActionsFooter1>
                  <Button
                    type="submit"
                    expand={true}
                    primary={true}
                    loading={isSubmitting}
                    label="Agregar"/>
                </ActionsFooter1>
              </form>
            </ModalContainer1>
          )}
        </Formik>
      </ModalBase1>
    )
  }
}

const ConnectedAddChildModal1 = connect(
  null, mapActionsToProps)(AddChildModal1);

export default ConnectedAddChildModal1;