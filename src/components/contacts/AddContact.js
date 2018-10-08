import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  //Como cada name de cada elemento corresponde ao nome no state, pode-se fazer desta forma
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Validar o recebido, a ver se há erros

    if (name === '') {
      this.setState({
        errors: {
          name: 'É necessário introduzir o nome!'
        }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          email: 'É necessário introduzir o email!'
        }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: {
          phone: 'É necessário introduzir o número de telemóvel'
        }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    this.props.addContact(newContact);

    //Limpar os inputs, reinicia o estado do form
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Adicionar contacto</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Nome"
              name="name"
              placeholder="Introduzir nome..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              type="email"
              name="email"
              placeholder="Introduzir email..."
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Telemóvel"
              name="phone"
              placeholder="Introduzir telemóvel..."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Adicionar contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { addContact }
)(AddContact);
