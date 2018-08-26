import * as actions from '../src/actions'

describe('actions', () => {
  it('should create an action to add a contact', () => {
    const contact = {
        name: 'Chao',
        email: 'chao@gmail.com',
        phone: '1231231234'
    };
    const expectedAction = {
      type: 'ADD_CONTACT',
      id: '21',
      name: 'Chao',
      email: 'chao@gmail.com',
      phone: '1231231234'
    }
    expect(actions.addContact(contact)).toEqual(expectedAction);
  })

  it('should create an action to delete a contact', () => {
    const expectedAction = {
        type: 'DELETE_CONTACT',
        id: '21'
      }
    expect(actions.deleteContact('21')).toEqual(expectedAction);
  })

  it('should create an action to edit a contact', () => {
    const contact = {
        name: 'Chao',
        email: 'chao@gmail.com',
        phone: '1231231234'
    };
    const expectedAction = {
        type: 'EDIT_CONTACT',
        contact
    };
    expect(actions.editContact(contact)).toEqual(expectedAction);
  })
})