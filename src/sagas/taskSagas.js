import { put } from 'redux-saga/effects';
import * as API from 'api';
import * as taskActionCreators from 'actions/taskCreators';

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action.payload);

    yield put(taskActionCreators.getTasksSucess({ tasks }));
  } catch (error) {
    yield put(taskActionCreators.getTasksError({ error }));
  }
}

export function * createTaskSaga (action) {
  try {
    const {
      data: { data: task },
    } = yield API.createTask(action.payload);
    yield put(taskActionCreators.createTaskSuccess({ task }));
  } catch (error) {
    yield put(taskActionCreators.createTaskError({ error }));
  }
}

export function * updateTaskSaga (action) {
  try {
    const {
      data: { data: taskData },
    } = yield API.updateTask(action.payload);

    yield put(taskActionCreators.updateTaskSuccess({ taskData }));
  } catch (error) {
    yield put(taskActionCreators.updateTaskError({ error }));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const {
      data: { data: id },
    } = yield API.deleteTask(action.payload);

    yield put(taskActionCreators.deleteTaskSucsess({ id }));
  } catch (error) {
    yield put(taskActionCreators.deleteTaskError({ error }));
  }
}
