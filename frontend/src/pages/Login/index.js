import React, { useState } from 'react';
import './styles.css';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const resp = await api.post('/devs', {
      username,
    });

    const { _id: id } = resp.data;

    history.push(`/dev/${id}`);
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
