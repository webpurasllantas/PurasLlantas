import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart';
import { FaFacebook } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'NOSOTROS', path: '/nosotros' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'CITAS', path: '/citas' },
    { name: 'TIENDA', path: '/tienda' },
    { name: 'DOCUMENTOS', path: '/documentos' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">PURAS</span>
          <span className="logo-accent">LLANTAS</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={20} />
            </a>
            <Link to="/tienda">
              <ShoppingCart size={20} />
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
