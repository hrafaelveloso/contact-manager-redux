import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

//Como é um componente não funcional, acedemos a variaveis através de  this.props, num componente funcional basta props.
class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //Evita que seja necessário fazer o bind se usar arrow functions
  onArrowClick = e => {
    //Altera o estado passado em argumento, e esta é a solução para dar toggle, coloca no estado que não estava
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  //Quando se clica para apagar o contacto
  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  render() {
    //Desconstruir o que vem no this.props e tiro as variaveis que vem la
    const { name, email, phone, id } = this.props.contact;
    const showContactInfo = this.state.showContactInfo;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={this.onArrowClick}
            className="fas fa-sort-down ml-3"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'red'
            }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`/contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt mr-2"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black'
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Telemóvel: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

//Sem mapStateToProps no connect()
export default connect(
  null,
  { deleteContact }
)(Contact);
