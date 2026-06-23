import { motion } from 'framer-motion';
import History from 'lucide-react/dist/esm/icons/history';
import Target from 'lucide-react/dist/esm/icons/target';
import Eye from 'lucide-react/dist/esm/icons/eye';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import './About.css';

const About = () => {
  const values = [
    'Honestidad en cada diagnóstico',
    'Calidad en refacciones y llantas',
    'Puntualidad en la entrega',
    'Pasión por el servicio automotriz',
    'Capacitación constante del equipo'
  ];

  return (
    <div className="about-page">
      <header className="page-header about-header">
        <div className="container">
          <h1>NUESTRA <span>HISTORIA</span></h1>
          <p>Comprometidos con el camino de nuestros clientes desde hace más de 15 años.</p>
        </div>
      </header>

      <section className="about-content section-padding">
        <div className="container about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="history-section">
              <h3><History size={24} className="accent-icon" /> ¿Quiénes Somos?</h3>
              <p>
                Puras Llantas SA de CV nació con el objetivo de profesionalizar el servicio automotriz 
                en la región. Nos hemos consolidado como el centro de servicio predilecto para quienes 
                buscan seguridad, confianza y las mejores marcas de llantas en un solo lugar.
              </p>
              <p>
                Contamos con equipo de última generación y técnicos certificados para asegurar que 
                cada vehículo que sale de nuestras instalaciones esté en condiciones óptimas para 
                la carretera.
              </p>
            </div>

            <div className="mv-grid">
              <div className="mv-card">
                <h3><Target size={24} className="accent-icon" /> Misión</h3>
                <p>Brindar soluciones integrales de mantenimiento automotriz y venta de llantas con la más alta calidad y transparencia.</p>
              </div>
              <div className="mv-card">
                <h3><Eye size={24} className="accent-icon" /> Visión</h3>
                <p>Ser el centro de servicio automotriz líder y referente nacional por nuestra innovación tecnológica y excelencia en servicio.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-values"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3>NUESTROS <span>VALORES</span></h3>
            <ul className="values-list">
              {values.map((v, i) => (
                <li key={i}><CheckCircle2 size={20} /> {v}</li>
              ))}
            </ul>
            <div className="about-cta-box">
              <p>¿Listo para darnos la confianza de cuidar tu auto?</p>
              <button className="btn btn-primary">CONTÁCTANOS</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
