import { useDispatch, useSelector } from 'react-redux';
import * as ActionCreators from 'actions/taskCreators';
import Task from 'components/Task';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import styles from './TaskLoader.module.scss';

const TaskLoader = props => {
  const dispatch = useDispatch();
  const { tasks, isFetching, error } = useSelector(({ task }) => task);

  const {
    getTasksRequest,
    updateTaskRequest,
    deleteTaskRequest,
  } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    if (!tasks.length) {
      loadMoreTasks();
    }
    return () => {};
  }, []);

  const loadMoreTasks = () => getTasksRequest({ offset: tasks.length });

  const toggleTask = ({ target: { checked } }, id) => {
    updateTaskRequest({ id, taskData: { isDone: checked } });
  };
  const changeDeadline = ({ target: { value } }, id) => {
    updateTaskRequest({ id, taskData: { deadline: value } });
  };

  return (
    <div className={styles.container}>
      <h1>Current tasks</h1>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error.message)}
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            changeDeadline={changeDeadline}
            deleteTaskAction={deleteTaskRequest}
          />
        ))}
      </ul>
      <button onClick={loadMoreTasks}>Load more tasks</button>
    </div>
  );
};

export default TaskLoader;
