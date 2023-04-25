import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
export const App = () => {
  return (
    <section className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </section>
  );
};
