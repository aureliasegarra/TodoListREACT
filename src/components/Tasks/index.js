// Import React
import React from 'react';

// Import data
import './style.scss';

// Import component
import Task from './Task';

// Component
const Tasks = () => (
  <ul className="tasks">
    <Task />
    <Task />
    <Task />
  </ul>

);

export default Tasks;
