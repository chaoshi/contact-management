import reducer from '../src/reducers'

describe('contacts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({"contacts": []})
  })

  it('should handle ADD_CONTACT', () => {
    const contact = {
        id: '21',
        name: 'Chao',
        email: 'chao@gmail.com',
        phone: '1231231234'
    };
    expect(
      reducer(undefined, {
        type: 'ADD_CONTACT',
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      })
    ).toEqual({
        "contacts": [
        {
            edit: false,
            id: '21',
            name: 'Chao',
            email: 'chao@gmail.com',
            phone: '1231231234'
        }
    ]})
  })

  it('should handle DELETE_CONTACT', () => {
    const contact = {
        id: '21',
        name: 'Chao',
        email: 'chao@gmail.com',
        phone: '1231231234'
    };
    reducer(undefined, {
        type: 'ADD_CONTACT',
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
    expect(
      reducer({
          contacts: [
            {
                edit: false,
                id: '21',
                name: 'Chao',
                email: 'chao@gmail.com',
                phone: '1231231234'
            }
          ]
      }, {
        type: 'DELETE_CONTACT',
        id: contact.id
      })
    ).toEqual({
        contacts: []})
  })

  it('should handle EDIT_CONTACT', () => {
    const contact = {
        id: '21',
        name: 'Chao',
        email: 'chao@gmail.com',
        phone: '1231231234'
    };
    const editContact = {
        id: '21',
        name: 'Ruby',
        email: 'ruby@gmail.com',
        phone: '1231231234'
    };
    reducer(undefined, {
        type: 'ADD_CONTACT',
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
    expect(
      reducer({
        contacts: [
          {
              edit: false,
              id: '21',
              name: 'Chao',
              email: 'chao@gmail.com',
              phone: '1231231234'
          }
        ]
    }, {
        type: 'EDIT_CONTACT',
        contact: editContact
      })
    ).toEqual({
        "contacts": [
            {
                edit: false,
                id: '21',
                name: 'Ruby',
                email: 'ruby@gmail.com',
                phone: '1231231234'
            }
        ]})
  })
})