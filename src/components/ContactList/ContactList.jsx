import ContactListItem from "components/ContactListItem/ContactListItem";
import { List } from "./ContactList.styled";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      <ContactListItem contacts={contacts} onDelete={onDelete} />
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};