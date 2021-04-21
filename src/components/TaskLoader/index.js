import { useDispatch, useSelector } from 'react-redux';
import * as ActionCreators from 'actions/taskCreators';
import Task from 'components/Task';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';
import styles from './TaskLoader.module.scss';
import LoaderControls from './LoaderControls';

const TaskLoader = props => {
  const dispatch = useDispatch();
  const { tasks, isFetching, error } = useSelector(({ task }) => task);

  const {
    getTasksRequest,
    updateTaskRequest,
    deleteTaskRequest,
  } = bindActionCreators(ActionCreators, dispatch);

  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState(qs.parse(location.search));

  useEffect(() => {
    setSearch(qs.parse(location.search));
  }, [location.search]);

  useEffect(() => {
    getTasksRequest(search);
  }, [search]);

  const toggleTask = ({ target: { checked } }, id) => {
    updateTaskRequest({ id, taskData: { isDone: checked } });
  };
  const changeDeadline = ({ target: { value } }, id) => {
    updateTaskRequest({ id, taskData: { deadline: value } });
  };
  const taskQueryControls = ({ pageNumber, newLimit }) => {
    const { page = 1, limit = 5 } = search;
    const newPage = Number(page) + pageNumber;

    history.push(
      `/tasks?${qs.stringify({
        page: newPage? newPage: page,
        limit: newLimit ? newLimit : limit,
      })}`
    );

    setSearch(qs.parse(location.search));
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
      <LoaderControls search={search} taskQueryControls={taskQueryControls}/>
    </div>
  );
};

export default TaskLoader;
