import React, { Component } from 'react';
import './App.css';
import AddContact from './components/add_contact';
import ContactList from './components/contact_list';

import Chance from 'chance';
const chance = new Chance();

class App extends Component {
  constructor(props) {
    super(props);

    let contacts = [];
    for (let i = 0; i < 20; i++) {
      contacts.push({
        id: chance.fbid(),
        name: chance.name(),
        email: chance.email({domain: 'example.com'}),
        phone: chance.phone({formatted: false})
      });
    }
    this.state = {
      contacts: contacts,
      sorting_name: false,
      sorting_email: false,
      sorting_phone: false
    };
  };

  addContact(contact) {
    this.setState({ contacts: this.state.contacts.concat(contact)})
  }

  editContact(editContact) {
    let newContactList = this.state.contacts;
    const index = newContactList.findIndex(contact => contact.id === editContact.id);
    if(index !== -1) { newContactList[index] = editContact; }
    this.setState({ contacts: newContactList});
  }

  sortName() {
    if(!this.state.sorting_name) {
      this.setState({
        contacts: this.state.contacts.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ),
        sorting_name: true
      });
    }
    else {
      this.setState({
        contacts: this.state.contacts.sort(function(a,b) {return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0);} ),
        sorting_name: false
      });
    }
  }

  sortEmail(){
    if(!this.state.sorting_email) {
      this.setState({
        contacts: this.state.contacts.sort(function(a,b) {return (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0);} ),
        sorting_email: true
      });
    }
    else {
      this.setState({
        contacts: this.state.contacts.sort(function(a,b) {return (a.email < b.email) ? 1 : ((b.email < a.email) ? -1 : 0);} ),
        sorting_email: false
      });
    }
  }

  sortPhone() {
    if(!this.state.sorting_phone) {
      this.setState({
        contacts: this.state.contacts.sort(function(a,b) {return (a.phone > b.phone) ? 1 : ((b.phone > a.phone) ? -1 : 0);} ),
        sorting_phone: true
      });
    }
    else {
      this.setState({
        contacts: this.state.contacts.sort(function(a,b) {return (a.phone < b.phone) ? 1 : ((b.phone < a.phone) ? -1 : 0);} ),
        sorting_phone: false
      });
    }
  }

  deleteContact(contactItem) {
    this.setState({ contacts: this.state.contacts.filter(item => item.id !== contactItem.id) })
  }

  render() {
    return (
      <div className="App">
        <h3>List of participants</h3>
        <AddContact addNewContact={contact => this.addContact(contact)}></AddContact>
        <ContactList
          contacts={this.state.contacts}
          handleDeleteContact={contactItem => this.deleteContact(contactItem)}
          handleEditContact={editContact => this.editContact(editContact)}
          handleSortName={() => this.sortName()}
          handleSortEmail={() => this.sortEmail()}
          handleSortPhone={() => this.sortPhone()}
        />
      </div>
    );
  }
}

export default App;
