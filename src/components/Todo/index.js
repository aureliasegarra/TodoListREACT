// Import React
import React from 'react';

// Import data
import './style.scss';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';
import tasksData from 'src/data/tasks';

// Component
const Todo = () => (
  <div className="todo">
    <Form />
    <Counter count={1} />
    <Tasks tasks={tasksData} />
  </div>
);

export default Todo;
