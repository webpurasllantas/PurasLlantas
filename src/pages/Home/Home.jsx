import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Award from 'lucide-react/dist/esm/icons/award';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import './Home.css';
import heroImg from '../../assets/hero.png';

const Home = () => {
  const features = [
    { icon: <Shield size={32} />, title: 'Garantía Total', desc: 'Respaldo en todos nuestros servicios y productos.' },
    { icon: <Award size={32} />, title: 'Marcas Premium', desc: 'Distribuidor oficial de las mejores llantas del mundo.' },
    { icon: <Wrench size={32} />, title: 'Tecnología Láser', desc: 'Alineación y balanceo con precisión milimétrica.' },
  ];

  const previewServices = [
    { title: 'Alineación y Balanceo', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },
    { title: 'Suspensión y Frenos', img: 'https://images.unsplash.com/photo-1486006396193-471a2abc9302?auto=format&fit=crop&q=80&w=800' },
    { title: 'Cambio de Aceite', img: 'https://images.unsplash.com/photo-1635437536607-b8572f443763?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={heroImg} alt="Puras Llantas Workshop" className="hero-bg" />
        <div className="container hero-content">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            TU SEGURIDAD <br /> <span>COMIENZA AQUÍ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expertos en mantenimiento preventivo y correctivo para tu vehículo. 
            Llantas de alto rendimiento y servicio especializado.
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/citas" className="btn btn-primary">AGENDAR CITA</Link>
            <Link to="/servicios" className="btn btn-outline">VER SERVICIOS</Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding">
        <div className="container features-grid">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section-padding">
        <div className="container">
          <div className="section-header">
            <h2>NUESTROS <span>SERVICIOS</span></h2>
            <Link to="/servicios" className="view-all">VER TODO <ChevronRight size={18} /></Link>
          </div>
          <div className="services-grid">
            {previewServices.map((s, i) => (
              <motion.div 
                key={i} 
                className="service-preview-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-img-container">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="service-info">
                  <h3>{s.title}</h3>
                  <Link to="/servicios" className="learn-more">MÁS INFO</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands section-padding">
        <div className="container">
          <h3>MARCAS ASOCIADAS</h3>
          <div className="brands-flex">
            <span>MICHELIN</span>
            <span>CONTINENTAL</span>
            <span>BRIDGESTONE</span>
            <span>GOODYEAR</span>
            <span>PIRELLI</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
