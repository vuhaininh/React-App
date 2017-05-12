import React, {Component} from 'react';

export default class ContactListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,

      id: this.props.contact.id,
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone
    };

    this.edit = this.edit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }

  edit() {
    this.setState({ editing: true });
    console.log(this.state.name + " " + this.state.email + " " + this.state.phone)
  }

  save() {
    const editContact = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.onEditContact(editContact);
    this.setState({ editing: false });
  }

  cancel() {
    this.setState({ editing: false });
  }

  renderNormal() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.email}</td>
        <td>{this.props.contact.phone}</td>
        <td className="action"><span onClick={this.edit}><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></span>&nbsp;&nbsp;<span onClick={() => this.props.onDeleteContact(this.props.contact)}><i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></span></td>
      </tr>
    );
  }

  renderForm() {
    return (
      <tr>
        <td>
          <input type="text" placeholder="Full name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} required size="10" />
        </td>
        <td>
          <input type="email" placeholder="E-mail address" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} required />
        </td>
        <td>
          <input type="tel" placeholder="Phone number" value={this.state.phone} onChange={(event) => this.setState({phone: event.target.value})} required size="10" />
        </td>
        <td className="button-handle">
          <input type="button" className="button-cancel" onClick={() => this.cancel()} value="Cancel" />&nbsp;&nbsp;
          <input type="button" className="button-save" onClick={() => this.save()} value="Save" />
        </td>
      </tr>
    );
  }

  render() {
    if(this.state.editing) {
      return this.renderForm()
    }
    else {
      return this.renderNormal()
    }
  }
}
