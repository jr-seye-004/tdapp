// src/components/TaskItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask, toggleComplete } from '../redux/actions';

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
      <div>
        <strong>{task.name}</strong>: {task.description}
      </div>
      <div>
        <button
          className="btn btn-sm btn-info mr-2"
          onClick={() => dispatch(editTask(task))}
        >
          Modifier
        </button>
        <button
          className="btn btn-sm btn-danger mr-2"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Supprimer
        </button>
        <button
          className={`btn btn-sm ${task.completed ? 'btn-secondary' : 'btn-success'}`}
          onClick={() => dispatch(toggleComplete(task.id))}
        >
          {task.completed ? 'Annuler' : 'Compléter'}
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
