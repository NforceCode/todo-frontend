import { format } from 'date-fns';

const TaskLi = props => {
  const {
    task: { id, body, isDone, deadline },
    toggleTask,
    changeDeadline,
    deleteTaskAction
  } = props;
  return (
    <li>
      <h2>ID: {id}</h2>
      <p>{body}</p>
      <label>
        Is task done:
        <input
          type='checkbox'
          checked={isDone}
          onChange={(e)=>{toggleTask(e, id)}}
        />
      </label>
      <label>
        Task deadline:
        <input
          type='date'
          value={deadline ? format(new Date(deadline), 'yyyy-MM-dd') : ''}
          onChange={(e) =>{changeDeadline(e, id)}}
          name={id}
        />
      </label>
      <button onClick={()=> {deleteTaskAction({id})}}>Delete task</button>
    </li>
  );
};
export default TaskLi;
