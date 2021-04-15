import ACTION_TYPES from 'actions/actionTypes';

const initialState = {
  tasks: [
    // {
    //   id: 0,
    //   body: 'test',
    //   isDone: false,
    //   deadline: '3000-1-1',
    // },
  ],
  isFetching: false,
  error: null,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { task: newTask },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...tasks, newTask],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { tasks: newTasks },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...tasks, ...newTasks],
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { taskData },
      } = action;

      const newTasks = [...tasks];
      const taskIndex = newTasks.findIndex(task => taskData.id === task.id);
      const targetTask = newTasks[taskIndex];
      newTasks[taskIndex] = { ...targetTask, ...taskData };

      return { ...state, isFetching: false, error: null, tasks: newTasks };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: tasks.filter(task => task.id !== Number(id)),
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default reducer;
