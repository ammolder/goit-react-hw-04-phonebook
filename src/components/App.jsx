import { Wrapper } from './App.styled.js';
import { useState, useEffect } from 'react';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const addContact = data => {
    data.id = nanoid();

    const names = contacts.map(item => item.name);
    if (names.includes(data.name)) {
      return alert(`${data.name} is already in contacts`);
    }

    setContacts([data, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Phonebook onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts
        contacts={visibleContacts}
        onSubmit={addContact}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
};
