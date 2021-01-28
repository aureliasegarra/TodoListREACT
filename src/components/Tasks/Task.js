// Import React
import React from 'react';

// Import data
import './style.scss';

const Task = () => (
  <li className="task">
    <input type="checkbox" className="task__checkbox" id="Faire une todo list" />
    <label htmlFor="Faire une todo list">Faire une todo list</label>
  </li>
);

export default Task;
