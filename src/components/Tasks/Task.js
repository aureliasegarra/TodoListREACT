// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './style.scss';

const Task = ({ id, label, done }) => (
  <li className="task">
    <input
      type="checkbox"
      className="task__checkbox"
      id={id}
      checked={done}
    />
    <label htmlFor={id}>{label}</label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
