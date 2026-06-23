import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppBtn.css';

const WhatsAppBtn = () => {
  return (
    <motion.a 
      href="https://wa.me/521234567890" 
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <FaWhatsapp size={30} />
      <span className="tooltip">¡Chatea con nosotros!</span>
    </motion.a>
  );
};

export default WhatsAppBtn;
