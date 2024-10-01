import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header'>
          <div className='header__img'>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}><img src={logo} alt="Logo de Kasa" /></NavLink>
          </div>
          <div className='header__nav'>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Apropos" className={({ isActive }) => (isActive ? "active" : "")}>
                    À Propos
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;