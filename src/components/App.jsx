import { useEffect } from 'react';
// import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact, deleteContact, setContacts } from 'redux/contacts/ContactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsByName } from 'redux/filter/FilterSlice';

const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  console.log(contacts)
  const filter = useSelector(state => state.filter)
  console.log(filter)
  const dispatch = useDispatch();

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      dispatch(setContacts(parsedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ id, name, number }) => {
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

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
    dispatch(filterContactsByName(e.currentTarget.value));
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
