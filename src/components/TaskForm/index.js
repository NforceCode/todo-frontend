import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { bindActionCreators } from 'redux';
import * as ActionCreators from 'actions/taskCreators';
import styles from './TaskForm.module.scss';

const TaskForm = props => {
  const { error } = useSelector(({ error }) => ({ error }));
  const dispatch = useDispatch();
  const { createTaskRequest } = bindActionCreators(ActionCreators, dispatch);

  const initialValues = {
    body: '',
    deadline: '',
  };

  const onSubmit = (value, formikBag) => {
    const { body, deadline } = value;

    const taskData = {
      body,
      deadline: deadline !== '' ? deadline : null,
    };

    createTaskRequest({ taskData });
    formikBag.resetForm();
  };
  return (
    <>
      {error && JSON.stringify(error.message)}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.container}>
          <Field name='body' placeholder='body' />
          <Field type='date' name='deadline' placeholder='deadline' />
          <button className={styles.btn} type='submit'>
            Create Task
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default TaskForm;
