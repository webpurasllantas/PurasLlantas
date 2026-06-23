import { motion } from 'framer-motion';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Scale from 'lucide-react/dist/esm/icons/scale';
import './Documents.css';

const Documents = () => {
  return (
    <div className="documents-page">
      <header className="page-header docs-header">
        <div className="container">
          <h1>DOCUMENTOS <span>LEGALES</span></h1>
          <p>Transparencia y cumplimiento legal en cada uno de nuestros procesos.</p>
        </div>
      </header>

      <section className="docs-content section-padding">
        <div className="container docs-container">
          <motion.div 
            className="doc-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="doc-icon-title">
              <Shield className="doc-main-icon" />
              <h2>AVISO DE PRIVACIDAD</h2>
            </div>
            <div className="doc-body">
              <p><strong>PURAS LLANTAS SA DE CV</strong>, con domicilio en Av. Independencia #123, Col. Centro, es responsable del tratamiento de sus datos personales.</p>
              
              <h3>Finalidad del tratamiento</h3>
              <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
              <ul>
                <li>Proveer los servicios y productos requeridos.</li>
                <li>Informar sobre cambios o nuevos productos o servicios.</li>
                <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
                <li>Evaluar la calidad del servicio.</li>
              </ul>

              <h3>Datos recabados</h3>
              <p>Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales: Nombre, Teléfono, Correo electrónico y Datos del vehículo.</p>
              
              <h3>Derechos ARCO</h3>
              <p>Usted tiene derecho a acceder, rectificar y cancelar sus datos personales, así como a oponerse al tratamiento de los mismos (Derechos ARCO), enviando una solicitud a contacto@purasllantas.com.</p>
            </div>
          </motion.div>

          <hr className="doc-divider" />

          <motion.div 
            className="doc-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="doc-icon-title">
              <Scale className="doc-main-icon" />
              <h2>TÉRMINOS Y CONDICIONES</h2>
            </div>
            <div className="doc-body">
              <p>Al utilizar nuestros servicios, usted acepta los términos aquí descritos. Todos nuestros trabajos cuentan con garantía de 30 días en mano de obra.</p>
              <p>Las garantías de las llantas están sujetas a las políticas de cada fabricante (Michelin, Continental, etc.).</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
