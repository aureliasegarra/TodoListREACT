import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import './style.scss';

const Tasks = ({ tasks }) => {
  const tasksList = tasks.map((task) => {
    console.log('object');

    return (
      <Task
        key={task.id}
        // id={task.id}
        // label={task.label}
        // done={task.done}
        {...task} // the spread operator to get the object prop
      />
    );
  });

  return (
    <ul className="tasks">
      {tasksList}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Tasks;
