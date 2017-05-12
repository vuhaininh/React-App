import React, {Component} from 'react';
import Chance from 'chance';
const chance = new Chance();

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      email: '',
      phone: ''
    };

    this.onFormSubmit= this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    const newContact = {
      id: chance.fbid(),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }

    this.props.addNewContact(newContact);

    this.setState({
      id: '',
      name: '',
      email: '',
      phone: ''
    });
  }

  render() {
    return (
      <div className="add-new">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" size="23" placeholder="Full name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} required />
          <input type="email" size="40" placeholder="E-mail address" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} required />
          <input type="tel" placeholder="Phone number" value={this.state.phone} onChange={(event) => this.setState({phone: event.target.value})} required />
          <input type="submit" className="pull-right" value="Add new" />
        </form>
      </div>
    );
  }

}

export default AddContact;
