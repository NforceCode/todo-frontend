import ACTION_TYPES from 'actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const requestDraft = produce((draftState, action) => {
  draftState.isFetching = true;
});

const errorDraft = produce((draftState, action) => {
  const {
    payload: { error },
  } = action;
  draftState.isFetching = false;
  draftState.error = error;
});

const handlers = {
  [ACTION_TYPES.CREATE_TASK_REQUEST]: requestDraft,
  [ACTION_TYPES.GET_TASKS_REQUEST]: requestDraft,
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: requestDraft,
  [ACTION_TYPES.DELETE_TASK_REQUEST]: requestDraft,

  [ACTION_TYPES.CREATE_TASK_ERROR]: errorDraft,
  [ACTION_TYPES.GET_TASKS_ERROR]: errorDraft,
  [ACTION_TYPES.UPDATE_TASK_ERROR]: errorDraft,
  [ACTION_TYPES.DELETE_TASK_ERROR]: errorDraft,

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;
    draftState.tasks.push(task);
  }),
  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { tasks },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;
    draftState.tasks = tasks;
  }),
  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { taskData },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;

    const taskIndex = draftState.tasks.findIndex(t => t.id === taskData.id);
    draftState.tasks[taskIndex] = taskData;
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { id },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;
    draftState.tasks = draftState.tasks.filter(task => task.id !== Number(id));
  }),
};

function taskReducer (state = initialState, action) {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
}

export default taskReducer;
