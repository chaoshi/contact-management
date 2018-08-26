let nextContactId = 21
export const addContact = contact => ({
  type: 'ADD_CONTACT',
  id: (nextContactId++).toString(),
  email: contact.email,
  name: contact.name,
  phone: contact.phone
})

export const fetchContact = contacts => ({
    type: 'FETCH_CONTACT',
    contacts
});

export const deleteContact = id => ({
    type: 'DELETE_CONTACT',
    id
});

export const editContact = contact => ({
    type: 'EDIT_CONTACT',
    contact
});