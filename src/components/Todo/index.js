// Import React
import React from 'react';

// Import data
import './style.scss';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// Component
const Todo = () => (
  <div className="todo">
    <Form />
    <Counter count={1} />
    <Tasks />
  </div>
);

export default Todo;
