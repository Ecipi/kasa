import logo from '../../assets/img/logo_footer.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;