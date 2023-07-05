export const addContact = ({ name, number, id }) => {
  return {
    type: 'contacts/addToContacts',
    payload: {
      name,
      number,
      id,
    }
  }
}

export const deleteContact = (contactId) => {
  return {
    type: 'contacts/deleteFromContacts',
    payload: contactId,
  }
}

export const setContacts = (contacts) => {
  return {
    type: 'contacts/setNewContact',
    payload: contacts,
  }
}
