import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

const Main = ({ match }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const resp = await api.get('/devs', {
        headers: { user: match.params.id },
      });

      setUsers(resp.data);
    };

    loadUser();
  }, [match.params.id]);

  const handleLike = async id => {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter(user => user._id !== id));
  };

  const handleDislike = async id => {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter(user => user._id !== id));
  };

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        <div className="empty">Acabou 😕</div>
      )}
    </div>
  );
};

export default Main;
