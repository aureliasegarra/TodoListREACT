// == Import npm
import React from 'react';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// == Import
import './style.scss';

import tasksData from 'src/data/tasks';

// == Composant
class Todo extends React.Component {
  // no need to declare the state in the constructor
  // we have babel-class-properties
  state = {
    tasks: tasksData,
    taskLabel: '',
  }

  // we go through a property of class to keep the "this"
  addTask = () => {
    const { taskLabel, tasks } = this.state;

    // get task ids = transform task array into ids array
    const ids = tasks.map((task) => task.id);

    // determine the max id
    const maxId = Math.max(...ids);

    const newTask = {
      id: maxId + 1,
      done: false,
      label: taskLabel,
    };

    // Notion of IMMUTABILITY = declarative,never modify the data, start again with new references
    const newTasks = [...tasks, newTask];

    this.setState({
      tasks: newTasks,
      taskLabel: '',
    });
  }

  setTaskLabel = (value) => {
    this.setState({
      taskLabel: value,
    });
  }

  setTaskDone = (taskId) => {
    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      // current task has the same id as the one passed in parameter?
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    const { tasks, taskLabel } = this.state;
    const undoneTasksNumber = tasks.filter((task) => !task.done).length;

    const undoneTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    const sortedTasks = [...undoneTasks, ...doneTasks];

    return (
      <div className="app">
        <Form
          onSubmitForm={this.addTask}
          inputValue={taskLabel}
          onChangeInput={this.setTaskLabel}
        />
        <Counter count={undoneTasksNumber} />
        <Tasks
          tasks={sortedTasks}
          setTaskDone={this.setTaskDone}
        />
      </div>
    );
  }
}

// == Export
export default Todo;
