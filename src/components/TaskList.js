// src/components/TaskList.js

import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
