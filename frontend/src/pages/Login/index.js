import React, { useState } from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    history.push('/main');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
