import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Como é um componente não funcional, acedemos a variaveis através de  this.props, num componente funcional basta props.
class Contact extends Component {
    render() {
        //Desconstruir o que vem no this.props e tiro as variaveis que vem la
        const { name, email, phone } = this.props;
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email: {email}</li>
                    <li>Telemóvel: {phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact;
