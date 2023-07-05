const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
 }

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contacts/addToContacts':
            return { ...state, contacts: [...state.contacts, action.payload] };
        case 'contacts/deleteFromContacts':
            const contactId = action.payload;
            return { ...state, contacts: state.contacts.filter(contact => contact.id !== contactId) };
        default:
            return state;
    }
};

export default contactsReducer;