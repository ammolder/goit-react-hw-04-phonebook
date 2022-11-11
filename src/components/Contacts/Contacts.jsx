import PropTypes from 'prop-types';
import { Button } from './Contacts.styled.js';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
