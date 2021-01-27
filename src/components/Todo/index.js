// Import React
import React from 'react';

// Import data
import './style.scss';
import Header from 'src/components/Header';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// Component
const Todo = () => (
  <div className="todo">
    <Header />
    <Counter />
    <Tasks />
  </div>
);

export default Todo;
