import React from 'react';
import { connect } from 'react-redux';
import {addContact} from '../actions';

const AddContact = ({ dispatch }) => {
  let name, email, phone;

  return (
    <div className='add-contact'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!name.value.trim()) {
          return
        }
        if (!email.value.trim()) {
          return
        }
        if (!phone.value.trim()) {
          return
        }
        dispatch(addContact({
          type: "ADD_CONTACT",
          name: name.value,
          email: email.value,
          phone: phone.value
        }))
        name.value = ''
        email.value = ''
        phone.value = ''
      }}>
        <label>name
          <input type="text" ref={node => name = node} />
        </label>
        <label>email
          <input type="email" ref={node => email = node} />
        </label>
        <label>phone
          <input type="tel" ref={node => phone = node} />
        </label>
        <button type="submit">
          Add Contact
        </button>
      </form>
    </div>
)};

export default connect()(AddContact)
