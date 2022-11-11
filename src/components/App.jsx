import { Wrapper } from './App.styled.js';
import { Component } from 'react';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    data.id = nanoid();

    const names = this.state.contacts.map(item => item.name);
    if (names.includes(data.name)) {
      return alert(`${data.name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('обновилось');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    console.log('App render');
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onSubmit={this.addContact}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
