const contacts = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_CONTACT':
        return action.contacts.map((obj) => {
            obj.edit = false;
            return obj;
        })
      case 'ADD_CONTACT':
        return [
          {
            edit: false,
            id: action.id,
            name: action.name,
            email: action.email,
            phone: action.phone
          },
          ...state
        ]
      case 'EDIT_CONTACT':
        const editItems = state.map(item => {
          if(item.id === action.contact.id){
            return { ...action.contact, edit: false }
          }
          return item;
        })
        return editItems;
      case 'DELETE_CONTACT':
          return state.filter(function( contact ) {
            return contact.id !== action.id;
          });
      default:
        return state;
    }
  };
  
  export default contacts;