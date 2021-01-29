// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './style.scss';

// Component
class Form extends React.Component {
  // on crée une propriété de classe qui prendra la référence du composant
  // une fois inséré dans le DOM
  taskInput = React.createRef();

  componentDidMount() {
    // champs texte en focus avec la méthode React
    this.taskInput.current.focus();
  }

  handleOnSubmit = (event) => {
    // les props dans une classe deviennent partie du contexte
    // il faut bien mettre this.props
    // on peut donc destructurer les props comme le state
    const { onSubmitForm } = this.props;
    event.preventDefault();
    onSubmitForm();
  };

  handleOnChange = (event) => {
    const { onChangeInput } = this.props;

    onChangeInput(event.target.value);
  };

  render() {
    const { inputValue } = this.props;

    return (
      <form onSubmit={this.handleOnSubmit} className="form">
        <input
          // je viens donner la référence à mon composant pour y avoir accès une fois dans le DOM
          ref={this.taskInput}
          type="text"
          placeholder="Ajouter une tâche"
          className="form__input"
          value={inputValue}
          onChange={this.handleOnChange}
          // autoFocus plus rapide !
        />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Form;
