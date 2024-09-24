import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './Header.scss';

function Header() {
  return (
    <header>
      <div>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}><img src={logo} alt="Logo de Kasa" /></NavLink>
      </div>
      <div>
        <nav>
          <ul className='ul'>
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
    </header>
  );
}

export default Header;