// Import React
import React from 'react';

// Import data
import './style.scss';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';
import tasksData from 'src/data/tasks';

// Component
const Todo = () => {
  const undoneTasksNumber = tasksData.filter((task) => !task.done).length;
  return (
    <div className="todo">
      <Form />
      <Counter count={undoneTasksNumber} />
      <Tasks tasks={tasksData} />
    </div>
  );
};

export default Todo;
