import React from 'react';
import PropTypes from 'prop-types';
import * as Helper from '../utils/helper';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: props.edit,
      name: props.name,
      email: props.email,
      phone: props.phone
    };
    this.updateNameState = this.updateNameState.bind(this);
    this.updateEmailState = this.updateEmailState.bind(this);
    this.updatePhoneState = this.updatePhoneState.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.enableEdit = this.enableEdit.bind(this);
  }

  updateNameState(event) {
    this.setState({name: event.target.value});
  }

  updateEmailState(event) {
    this.setState({email: event.target.value});
  }

  updatePhoneState(event) {
    this.setState({phone: event.target.value});
  }

  submitEdit(event) {
    this.props.editContact(this.state);
    this.setState({edit: false});
  }

  enableEdit(event){
    this.setState({edit: true});
  }

  render() {
    return (
      this.state.edit
      ?<tr>
        <td>
          <input type="text" value={this.state.name} onChange={this.updateNameState}/>
        </td>
        <td>
          <input type="email" value={this.state.email} onChange={this.updateEmailState}/>
        </td>
        <td>
          <input type="tel" value={this.state.phone} onChange={this.updatePhoneState}/>
        </td>
        <td><button onClick={this.submitEdit}>Confirm</button></td>
        <td></td>
      </tr>
      :<tr>
        <td>{Helper.formatName(this.state.name)}</td>
        <td>{this.state.email}</td>
        <td>{Helper.formatPhoneNumber(this.state.phone)}</td>
        <td><button onClick={this.enableEdit}>edit</button></td>
        <td><button onClick={this.props.deleteContact}>delete</button></td>
      </tr>
    )
  }
}

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;