import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from '../Icons/Background.webp';
import '../Styles/Sidebar.css';

// Import de svg
import Notificacion from '../Icons/Notificacion.svg';
import NuevaNotificacion from '../Icons/NuevaNotificacion.svg';

const Header = (props) => {
  const { history } = props;
  const { items } = props;

  const [isOpen, setOpen] = useState(false);

  function handleItemClick(to) {
    history.push(to);
    console.log(`Let's go to ${to}!`);
  }

  return (
    <nav className="base-header">
      {/* Header content */}
      <div className="header-content">
        {/* Hamburger */}
        <button className="sidenav-button" onClick={() => setOpen(!isOpen)}>
          <svg
            style={{ width: '1em', height: '1em', color: 'white' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <span>Grupo Sanchez</span>
      </div>

      {/* <div>
        <img src={Notificacion} style={{ width: '1.4em', height: '1.4em', color: 'white' }} />
      </div> */}

      {isOpen && (
        <div onClick={() => setOpen(false)} className="sidenav-background">
          <div onClick={() => setOpen(false)} className="sidenav-background-content"></div>
        </div>
      )}

      <aside className={`sidenav ${isOpen ? 'sidenav-opened' : 'sidenav-closed'}`}>
        <img
          src={bg}
          style={{ objectFit: 'cover', position: 'absolute', height: '100%', width: '100%' }}
        />
        <div onClick={() => setOpen(!isOpen)} className="sidenav-header" style={{ zIndex: '11' }}>
          <svg
            style={{ width: '1em', height: '1em', cursor: 'pointer', marginRight: '0.5rem' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>

          <span>Grupo Sanchez </span>
        </div>

        <div className="sidenav-content" style={{ zIndex: '11' }}>
          {items.map(({ name, to, icon }, i) => (
            <div key={i} className="sidenav-item" onClick={handleItemClick.bind(this, to)}>
              <div className="sidenav-inner-item">
                <div
                  style={{
                    width: '2em',
                    display: 'flex',
                    justifyContent: 'center',
                    marginRight: '0.5em',
                  }}
                >
                  <FontAwesomeIcon icon={icon} />
                </div>
                <span>{name}</span>
              </div>
            </div>
          ))}
        </div>
        <div onClick={() => history.push('/')} className="sidenav-footer" style={{ zIndex: '11' }}>
          Cerrar Sesion
        </div>
      </aside>
    </nav>
  );
};

export default withRouter(Header);
