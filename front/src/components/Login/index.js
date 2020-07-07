import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './login.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (

    <div className="login">
      <h1>Bon retour parmis nous.</h1>
      {isLogged && (
      <div>Vous êtes connecté</div>)}

      {!isLogged && (
      <div className="login-form">
        <form
          onSubmit={handleSubmit}
        >
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <div>
            <button type="submit">CONNEXION</button>
          </div>
        </form>

        <div>
          <div className="login-layout">
            <p>J'ai oublié mon mot de passe</p>
            <hr />
            <p>Pas encore de compte? <a>Inscription</a></p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
};

export default Login;