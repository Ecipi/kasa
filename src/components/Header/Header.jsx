import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './Header.scss';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo de Kasa" />
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
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;