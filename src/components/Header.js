import React from 'react';
import PropTypes from 'prop-types';


//Como é um componente funcional, recebe props, num componente que nao seja uma funcao, tem de ser this.props
const Header = (props) => {
    const {branding} = props;
    return (
        <div>
            <h1>{branding}</h1>
        </div>
    )
};

//Caso não seja passada uma variável branding, mostra My App
Header.defaultProps = {
    branding : 'My App'
};

Header.propTypes = {
    branding : PropTypes.string.isRequired
};

export default Header;