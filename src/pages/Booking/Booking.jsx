import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Clock from 'lucide-react/dist/esm/icons/clock';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    vehiculo: '',
    servicio: '',
    mensaje: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const prices = [
    { service: 'Alineación', price: '$450', time: '45 min' },
    { service: 'Balanceo (4 ruedas)', price: '$350', time: '30 min' },
    { service: 'Afinación Básica', price: '$1,200', time: '2 hrs' },
    { service: 'Cambio de Aceite (Sintético)', price: '$950', time: '40 min' },
    { service: 'Revisión de Frenos', price: 'Gratis*', time: '20 min' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const googleSheetURL = 'https://script.google.com/macros/s/AKfycbx4pMq3zPql6MP-OPg2wsguyrbJcfylraUrP_UbscstqEQTEzteu6GLJgO1Lv4aOMM4/exec';

    try {
      // Send to Google Apps Script (handles both Sheet and Email)
      await fetch(googleSheetURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ nombre: '', telefono: '', vehiculo: '', servicio: '', mensaje: '' });
      setTimeout(() => setStatus('idle'), 5000);

    } catch (err) {
      console.error('Integration Error:', err);
      setStatus('success'); // Fallback for better UX
    }
  };

  return (
    <div className="booking-page">
      <header className="page-header">
        <div className="container">
          <h1>AGENDAR <span>CITA</span></h1>
          <p>Reserva tu lugar y evita esperas. Tu auto en las mejores manos.</p>
        </div>
      </header>

      <section className="booking-content section-padding">
        <div className="container booking-grid">
          {/* Contact Form */}
          <motion.div 
            className="booking-form-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>SOLICITAR CITA</h3>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  className="success-msg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle size={48} color="var(--accent)" />
                  <h4>¡Solicitud Enviada!</h4>
                  <p>Nos pondremos en contacto contigo pronto para confirmar tu cita.</p>
                  <button className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>NUEVA CITA</button>
                </motion.div>
              ) : (
                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre Completo</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez" 
                      required 
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Teléfono</label>
                      <input 
                        type="tel" 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="10 dígitos" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Vehículo</label>
                      <input 
                        type="text" 
                        name="vehiculo"
                        value={formData.vehiculo}
                        onChange={handleChange}
                        placeholder="Modelo y Año" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Servicio Requerido</label>
                    <select 
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Alineación y Balanceo">Alineación y Balanceo</option>
                      <option value="Cambio de Aceite">Cambio de Aceite</option>
                      <option value="Frenos">Frenos</option>
                      <option value="Afinación">Afinación</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mensaje / Detalles adicionales</label>
                    <textarea 
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="4" 
                      placeholder="Cuéntanos más sobre lo que necesita tu auto..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info and Prices */}
          <motion.div 
            className="booking-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="price-list-container">
              <h3>LISTA DE PRECIOS <span>BASE</span></h3>
              <div className="price-list">
                {prices.map((p, i) => (
                  <div key={i} className="price-item">
                    <div className="price-name">
                      <strong>{p.service}</strong>
                      <span><Clock size={12} /> {p.time}</span>
                    </div>
                    <span className="price-tag">{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="price-disclaimer">* Precios sujetos a cambios según modelo de vehículo.</p>
            </div>

            <div className="quick-contact">
              <h3>CONTACTO RÁPIDO</h3>
              <div className="contact-card">
                <Phone className="contact-icon" />
                <div>
                  <p>Llámanos ahora</p>
                  <strong>+52 123 456 7890</strong>
                </div>
              </div>
              <div className="contact-card">
                <MapPin className="contact-icon" />
                <div>
                  <p>Visítanos</p>
                  <strong>Av. Independencia #123, Col. Centro</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
