import React from 'react';
import ContactListItem from './contact_list_item';

const ContactList = (props) => {
  const contactItems = props.contacts.map((contact) => {
    return <ContactListItem
              key={contact.id}
              contact={contact}
              onDeleteContact={contactItem => props.handleDeleteContact(contactItem)}
              onEditContact={editContact => props.handleEditContact(editContact)}
            />
  });

  return (
    <table className="table contact-list">
      <thead>
        <tr>
          <th><span className="col" onClick={() => props.handleSortName()}>Name &nbsp;<i className="fa fa-arrow-down" aria-hidden="true"></i></span></th>
          <th><span className="col" onClick={() => props.handleSortEmail()}>E-mail address</span></th>
          <th><span className="col" onClick={() => props.handleSortPhone()}>Phone number</span></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contactItems}
      </tbody>
    </table>
  );
}

export default ContactList;
