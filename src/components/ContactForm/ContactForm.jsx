import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import Notiflix from 'notiflix';
import { contactFilter } from 'utils/ContactFormFunc';
import { getContacts, getName, getNumber } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { setName, setNumber } from 'redux/formSlice';
const ContactForm = () => {
  const name = useSelector(getName);
  const number = useSelector(getNumber);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <>
      <form
        className={css.form}
        onSubmit={evt => {
          evt.preventDefault();

          if (contactFilter(contacts, name)) {
            Notiflix.Notify.warning(`${name} is already in contacts`);
          } else {
            dispatch(addContact(name, number));
            dispatch(setName(''));
            dispatch(setNumber(''));
          }
        }}
      >
        <label className={css.formLabel}>
          Name:
          <input
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={evt => dispatch(setName(evt.currentTarget.value))}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number:
          <input
            className={css.formInput}
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            onChange={evt => dispatch(setNumber(evt.currentTarget.value))}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
