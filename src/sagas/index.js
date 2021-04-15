import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from 'actions/actionTypes';
import * as taskSagas from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, taskSagas.getTasksSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, taskSagas.createTaskSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_REQUEST, taskSagas.updateTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, taskSagas.deleteTaskSaga);
}

export default rootSaga;
