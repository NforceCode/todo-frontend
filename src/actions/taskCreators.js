import ACTION_TYPES from './actionTypes';

// POST
export const createTaskRequest = ({ taskData }) => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { taskData },
});

export const createTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

// GET
export const getTasksRequest = ({ limit, page }) => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
  payload: { limit, page },
});

export const getTasksSucess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTasksError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error },
});

// PATCH
export const updateTaskRequest = ({ id, taskData }) => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
  payload: { id, taskData },
});

export const updateTaskSuccess = ({ taskData }) => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  payload: { taskData },
});

export const updateTaskError = ({ error }) => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: { error },
});

//DELETE
export const deleteTaskRequest = ({ id }) => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: { id },
});

export const deleteTaskSucsess = ({ id }) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { id },
});

export const deleteTaskError = ({ error }) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error },
});
