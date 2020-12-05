import React, { useState } from 'react';
import '../Styles/Sidebar.css';
import Notificacion from '../Icons/Notificacion.svg';
import NuevaNotificacion from '../Icons/NuevaNotificacion.svg';

const Header = (props) => {
  const { items } = props;

  const [isOpen, setOpen] = useState(false);

  function handleItemClick(to) {
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

        <img src={Notificacion} style={{ width: '1.4em', height: '1.4em', color: 'white' }} />
      </div>

      {isOpen && (
        <div onClick={() => setOpen(false)} className="sidenav-background">
          <div onClick={() => setOpen(false)} className="sidenav-background-content"></div>
        </div>
      )}

      <aside className={`sidenav ${isOpen ? 'sidenav-opened' : 'sidenav-closed'}`}>
        <div onClick={() => setOpen(!isOpen)} className="sidenav-header">
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

        <div className="sidenav-content">
          {items.map(({ name, to, icon }, i) => (
            <div key={i} className="sidenav-item" onClick={handleItemClick.bind(this, to)}>
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <div className="sidenav-footer">Cerrar Sesion</div>
      </aside>
    </nav>
  );
};

export default Header;
