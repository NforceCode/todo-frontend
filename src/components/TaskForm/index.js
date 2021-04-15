import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as TaskCreators from 'actions/taskCreators';

const TaskForm = props => {
  const { createTaskAction, error } = props;
  const onSubmit = (taskData, formikBag) => {
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
        <Form>
          <Field name='body' placeholder='body' />
          <Field type='date' name='deadline' placeholder='deadline' />
          <button type='submit'>Create Task</button>
        </Form>
      </Formik>
    </>
  );
};
const mapStateToProps = ({error}) => ({error});

const mapDispathcToProps = dispatch => ({
  createTaskAction: ({ taskData }) =>
    dispatch(TaskCreators.createTaskRequest({ taskData })),
});

export default connect(mapStateToProps, mapDispathcToProps)(TaskForm);
