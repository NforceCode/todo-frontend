import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import styles from'./App.module.scss';

const Home = lazy(() => import('./pages/Home'));
const TaskCreation = lazy(() => import('./pages/TaskCreation'));
const Tasks = lazy(() => import('./pages/Tasks'));

function App () {
  return (
    <div className={styles.App}>
      <Router>
        <ul className={styles.navUl}>
          <li className={styles.navItem}>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/addtask'>Add task</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/tasks'>Your tasks</NavLink>
          </li>
        </ul>
        <Suspense fallback={'App is loading...'}>
          <Switch className={styles.centered}>
            <Route exact path='/' component={Home} />
            <Route path='/addtask' component={TaskCreation} />
            <Route path='/tasks' component={Tasks} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
