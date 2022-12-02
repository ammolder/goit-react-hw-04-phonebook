import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './Phonebook.styled';

export const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputID = nanoid();
  const numberInputID = nanoid();

  const handleNameChange = evt => {
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        break;
      case 'number':
        setNumber(evt.currentTarget.value);
        break;
      default:
        console.log('There is no such value');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputID}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            id={nameInputID}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberInputID}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleNameChange}
            id={numberInputID}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit ">Add contact</Button>
      </Form>
    </>
  );
};
