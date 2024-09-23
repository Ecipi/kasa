import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './Header.css';

function Header() {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setActivePage(path);
  }, []);

  return (
    <header>
      <div>
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a
                href="/Home"
                className={activePage === '/Home' ? 'active' : ''}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/Apropos"
                className={activePage === '/Apropos' ? 'active' : ''}
              >
                A Propos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;