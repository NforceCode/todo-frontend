import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as TaskCreators from 'actions/taskCreators';
import styles from './TaskForm.module.scss';

const TaskForm = props => {
  const { createTaskAction, error } = props;
  const onSubmit = (value, formikBag) => {
    const { body, deadline } = value;

    const taskData = {
      body,
      deadline: deadline !== '' ? deadline : null,
    };

    createTaskAction({ taskData });
    formikBag.resetForm();
  };
  return (
    <>
      {error && JSON.stringify(error.message)}
      <Formik
        initialValues={{
          body: '',
          deadline: '',
        }}
        onSubmit={onSubmit}
      >
        <Form className={styles.container}>
          <Field name='body' placeholder='body' />
          <Field type='date' name='deadline' placeholder='deadline' />
          <button className={styles.btn}type='submit'>Create Task</button>
        </Form>
      </Formik>
    </>
  );
};
const mapStateToProps = ({ error }) => ({ error });

const mapDispathcToProps = dispatch => ({
  createTaskAction: ({ taskData }) =>
    dispatch(TaskCreators.createTaskRequest({ taskData })),
});

export default connect(mapStateToProps, mapDispathcToProps)(TaskForm);
