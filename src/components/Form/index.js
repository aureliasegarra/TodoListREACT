// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './style.scss';

// Component
class Form extends React.Component {
  // a class property will take the reference of the component once inserted in the DOM
  // ! concept of reference to review
  taskInput = React.createRef();

  componentDidMount() {
    // text fields in focus with React method
    this.taskInput.current.focus();
  }

  handleOnSubmit = (event) => {
    // props in a class become part of the context - destructuration possible
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
          // I come to give the reference to my component to have access to it once in the DOM
          ref={this.taskInput}
          type="text"
          placeholder="Ajouter une tâche"
          className="form__input"
          value={inputValue}
          onChange={this.handleOnChange}
          // autoFocus faster !
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
