import logo from '../../assets/img/logo.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <div>
        <nav>
            <ul>
                <li>
                <a href="../pages/Home">Accueil</a>
                </li>
                <li>
                <a href="../pages/Apropos">A propos</a>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;