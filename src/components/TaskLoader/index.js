import { connect } from 'react-redux';
import * as TaskCreators from 'actions/taskCreators';
import Task from 'components/Task';
import { useEffect } from 'react';
import styles from './TaskLoader.module.scss';

const TaskLoader = props => {
  const {
    tasks,
    isFetching,
    error,
    getTaskAction,
    updateTaskAction,
    deleteTaskAction,
  } = props;

  useEffect(() => {
    if(!tasks.length) {
      loadMoreTasks();
    }
    return () => {};
  }, []);

  const loadMoreTasks = () => getTaskAction({ offset: tasks.length });

  const toggleTask = ({ target: { checked } }, id) => {
    updateTaskAction({ id, taskData: { isDone: checked } });
  };
  const changeDeadline = ({ target: { value } }, id) => {
    updateTaskAction({ id, taskData: { deadline: value } });
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
            deleteTaskAction={deleteTaskAction}
          />
        ))}
      </ul>
      <button onClick={loadMoreTasks}>Load more tasks</button>
    </div>
  );
};

const mapStateToProps = ({ tasks, isFetching, error }) => ({
  tasks,
  isFetching,
  error,
});
const mapDispatchToProps = dispatch => ({
  getTaskAction: ({ limit, offset }) =>
    dispatch(TaskCreators.getTasksRequest({ limit, offset })),
  updateTaskAction: ({ id, taskData }) =>
    dispatch(TaskCreators.updateTaskRequest({ id, taskData })),
  deleteTaskAction: ({ id }) =>
    dispatch(TaskCreators.deleteTaskRequest({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskLoader);
