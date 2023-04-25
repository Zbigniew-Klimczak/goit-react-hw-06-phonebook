import Contact from '../Contact/Contact';
import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts } from 'redux/selectors';
import { filteredContacts } from 'utils/ContactListFunc';
const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  return (
    <ul className={css.contactList}>
      {filteredContacts(contacts, filter).map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          contact={contact}
        ></Contact>
      ))}
    </ul>
  );
};
export default ContactList;
