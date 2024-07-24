// src/App.js

import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Liste de Tâches</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;
