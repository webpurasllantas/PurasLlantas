import { Link } from 'react-router-dom';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Clock from 'lucide-react/dist/esm/icons/clock';
import { FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <Link to="/" className="logo">
            <span className="logo-text">PURAS</span>
            <span className="logo-accent">LLANTAS</span>
          </Link>
          <p className="footer-desc">
            Centro de servicio automotriz líder en la región. Especialistas en llantas, 
            suspensión, frenos y mantenimiento preventivo.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/citas">Citas</Link></li>
            <li><Link to="/tienda">Tienda</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>
          <ul>
            <li><MapPin size={18} /> Av. Independencia #123, Col. Centro</li>
            <li><Phone size={18} /> +52 123 456 7890</li>
            <li><Mail size={18} /> contacto@purasllantas.com</li>
            <li><Clock size={18} /> Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 14:00</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} PURAS LLANTAS SA DE CV. Todos los derechos reservados.</p>
          <Link to="/documentos" className="legal-link">Aviso de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
