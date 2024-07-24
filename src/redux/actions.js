// src/redux/actions.js

// Action types
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

// Action creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleComplete = (taskId) => ({
  type: TOGGLE_COMPLETE,
  payload: taskId,
});
