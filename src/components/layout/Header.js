import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Como é um componente funcional, recebe props, num componente que nao seja uma funcao, tem de ser this.props
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//Caso não seja passada uma variável branding, mostra My App
Header.defaultProps = {
  branding: 'My App'
};

//Valida o tipo de dados recebido, tem de ser string obrigatoriamente
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
