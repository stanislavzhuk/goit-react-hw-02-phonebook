import PropTypes from 'prop-types';
import { Item, Button, Contact } from './ContactListItem.styled';

const ContactListItem = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <Contact>
          {name}: {number}
        </Contact>
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactListItem;

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};