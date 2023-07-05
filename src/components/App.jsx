import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact, deleteContact } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const [filter, setFilter] = useState('');
  const {contacts} = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ id, name, number }) => {
    const isContactExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (!isContactExist) {
      const newContact = {
              id,
              name,
              number,
            };
      dispatch(addContact(newContact));
    } else {
      window.alert(`${name} is already in contacts`);
      return;
    }
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContacts} />

      {contacts.length >= 1 && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      )}
    </>
  );
};

export default App;
