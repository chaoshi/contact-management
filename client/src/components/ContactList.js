import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from './Contact';
import {deleteContact, editContact} from '../actions';
import { Table } from 'reactstrap';

const ContactList = ({contacts, deleteContact, editContact}) => {
  return (
    <div className='contact-list'>
      <Table responsive striped>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <Contact key={contact.id}
          {...contact}
          deleteContact={() => deleteContact(contact.id)}
          editContact={(modify) => editContact(modify)}
          />
        ))}
      </tbody>
    </Table>
  </div>
)};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      edit: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contacts: state.contacts
})
const mapDispatchToProps = {
  deleteContact,
  editContact
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)
