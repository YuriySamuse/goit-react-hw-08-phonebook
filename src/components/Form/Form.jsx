import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Forma, Label, Input, Button } from 'components/Form/Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  // nameInputId = nanoid();
  // numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Forma onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            // id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            // id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Forma>
    );
  }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
