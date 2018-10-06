import React from 'react';
import PropTypes from 'prop-types';

//Como é um componente funcional, recebe props, num componente que nao seja uma funcao, tem de ser this.props
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
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
