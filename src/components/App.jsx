import React, { Component } from 'react';
import Form from './ContactForm';






export class App extends Component {

  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value })}

  // handleSubmit = e => {
  //   this.setState({contacts.push(e.currentTarget.value)})
  // }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Form
          onChange={this.handleInputChange}
          contacts={this.state.contacts}
          name={this.state.name}
        ></Form>
      </div>
    );
  }
}
