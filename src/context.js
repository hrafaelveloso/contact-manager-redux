import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Hélder Veloso',
        email: 'rafaelcostaveloso@gmail.com',
        phone: '913056888'
      },
      {
        id: 2,
        name: 'Jorge Bastos',
        email: 'jorgepbastos8@gmail.com',
        phone: '933339874'
      },
      {
        id: 3,
        name: 'Simão Rocha',
        email: 'simaoptrocha@gmail.com',
        phone: '917710297'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
