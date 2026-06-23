import { motion } from 'framer-motion';
import Settings from 'lucide-react/dist/esm/icons/settings';
import Disc from 'lucide-react/dist/esm/icons/disc';
import Droplets from 'lucide-react/dist/esm/icons/droplets';
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Car from 'lucide-react/dist/esm/icons/car';
import './Services.css';

const Services = () => {
  const allServices = [
    {
      icon: <Disc size={40} />,
      title: 'Alineación y Balanceo',
      desc: 'Optimización de la trayectoria y eliminación de vibraciones para un manejo suave y seguro.',
      details: ['Alineación 3D', 'Balanceo computarizado', 'Rotación de llantas']
    },
    {
      icon: <Car size={40} />,
      title: 'Suspensión',
      desc: 'Revisión y reparación de amortiguadores y componentes para máxima estabilidad.',
      details: ['Cambio de amortiguadores', 'Bujes y terminales', 'Resortes']
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Frenos',
      desc: 'Sistema de frenado garantizado. Seguridad total al detener tu vehículo.',
      details: ['Cambio de balatas', 'Rectificado de discos', 'Líquido de frenos']
    },
    {
      icon: <Droplets size={40} />,
      title: 'Cambio de Aceite',
      desc: 'Mantenimiento del motor con aceites sintéticos y filtros de alta calidad.',
      details: ['Aceite Multigrado', 'Filtro de aire', 'Lavado de motor']
    },
    {
      icon: <Settings size={40} />,
      title: 'Afinación Mayor',
      desc: 'Puesta a punto integral para mejorar el rendimiento de combustible y potencia.',
      details: ['Limpieza de inyectores', 'Bujías de iridio', 'Cuerpo de aceleración']
    },
    {
      icon: <Gauge size={40} />,
      title: 'Diagnóstico por Computadora',
      desc: 'Escaneo completo de sensores y sistemas electrónicos del vehículo.',
      details: ['Borrado de códigos', 'Check Engine', 'Pruebas de sensores']
    }
  ];

  return (
    <div className="services-page">
      <header className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            NUESTROS <span>SERVICIOS</span>
          </motion.h1>
          <p>Soluciones profesionales para mantener tu vehículo en perfectas condiciones.</p>
        </div>
      </header>

      <section className="services-list section-padding">
        <div className="container services-list-grid">
          {allServices.map((service, i) => (
            <motion.div 
              key={i} 
              className="service-detail-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="service-header">
                <div className="service-icon-bg">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.desc}</p>
              <ul className="service-details">
                {service.details.map((detail, idx) => (
                  <li key={idx}>• {detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
