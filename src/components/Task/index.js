import { format } from 'date-fns';
import styles from './Task.module.scss';

const Task = props => {
  const {
    task: { id, body, isDone, deadline },
    toggleTask,
    changeDeadline,
    deleteTaskAction,
  } = props;
  return (
    <li className={styles.container}>
      <h3>{body}</h3>

      <label>
        Is task done:
        <input
          type='checkbox'
          checked={isDone}
          onChange={e => {
            toggleTask(e, id);
          }}
        />
      </label>
      <label>
        Task deadline:
        <input
          type='date'
          value={deadline ? format(new Date(deadline), 'yyyy-MM-dd') : ''}
          onChange={e => {
            changeDeadline(e, id);
          }}
          name={id}
        />
      </label>
      <button
        className={styles.btn}
        onClick={() => {
          deleteTaskAction({ id });
        }}
      >
        Delete task
      </button>
    </li>
  );
};
export default Task;
