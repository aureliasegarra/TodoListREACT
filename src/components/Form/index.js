// Import React
import React from 'react';

// Import data
import './style.scss';

// Component
const Form = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('je soumet le formulaire');
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="inputTask"
        type="text"
        placeholder="Ajouter une tâche"
      />
    </form>
  );
};

export default Form;
