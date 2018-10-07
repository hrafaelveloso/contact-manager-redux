import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
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
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
