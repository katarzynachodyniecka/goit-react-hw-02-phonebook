import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  state = {
    contacts: [],
    name: '',
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter />
  <ContactList /> */}
    </div>
  );
};
