import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const TaskCreation = lazy(() => import('./pages/TaskCreation'));
const Tasks = lazy(() => import('./pages/Tasks'));

function App () {
  return (
    <div className='App'>
      <Router>
        <ul className='nav-ul'>
          <li className='nav-item'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/addtask'>Add task</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/tasks'>Your tasks</NavLink>
          </li>
        </ul>
        <Suspense fallback={'App is loading...'}>
          <Switch>
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
