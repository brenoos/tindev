import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

const Main = ({ match }) => (
  <div className="main-container">
    <img src={logo} alt="Tindev" />
    <ul>
      <li>
        <img
          src="https://avatars0.githubusercontent.com/u/4248081?v=4"
          alt=""
        />
        <footer>
          <strong>Filipe Deschamps</strong>
          <p>Programador e cantor sertanejo nos tempos livres.</p>
        </footer>

        <div className="buttons">
          <button type="button">
            <img src={dislike} alt="Dislike" />
          </button>
          <button type="button">
            <img src={like} alt="Like" />
          </button>
        </div>
      </li>
      <li>
        <img
          src="https://avatars0.githubusercontent.com/u/4248081?v=4"
          alt=""
        />
        <footer>
          <strong>Filipe Deschamps</strong>
          <p>Programador e cantor sertanejo nos tempos livres.</p>
        </footer>

        <div className="buttons">
          <button type="button">
            <img src={dislike} alt="Dislike" />
          </button>
          <button type="button">
            <img src={like} alt="Like" />
          </button>
        </div>
      </li>
      <li>
        <img
          src="https://avatars0.githubusercontent.com/u/4248081?v=4"
          alt=""
        />
        <footer>
          <strong>Filipe Deschamps</strong>
          <p>Programador e cantor sertanejo nos tempos livres.</p>
        </footer>

        <div className="buttons">
          <button type="button">
            <img src={dislike} alt="Dislike" />
          </button>
          <button type="button">
            <img src={like} alt="Like" />
          </button>
        </div>
      </li>
      <li>
        <img
          src="https://avatars0.githubusercontent.com/u/4248081?v=4"
          alt=""
        />
        <footer>
          <strong>Filipe Deschamps</strong>
          <p>Programador e cantor sertanejo nos tempos livres.</p>
        </footer>

        <div className="buttons">
          <button type="button">
            <img src={dislike} alt="Dislike" />
          </button>
          <button type="button">
            <img src={like} alt="Like" />
          </button>
        </div>
      </li>
    </ul>
  </div>
);

export default Main;
