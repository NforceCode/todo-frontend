import styles from './LoaderControls.module.scss';

const LoaderControls = props => {
  const { taskQueryControls, search } = props;
  return (
    <div className={styles.container}>
      <button onClick={() => taskQueryControls({ pageNumber: -1 })}>
        Previous page
      </button>
      <label>
        Tasks per page:{' '}
        <input
          type='number'
          placeholder='tasks'
          value={search.limit}
          onChange={({ target: { value } }) => {
            taskQueryControls({ newLimit: value });
          }}
        />
      </label>
      <button onClick={() => taskQueryControls({ pageNumber: 1 })}>
        Next page
      </button>
    </div>
  );
};

export default LoaderControls;
