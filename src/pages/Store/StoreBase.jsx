import { motion } from 'framer-motion';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Search from 'lucide-react/dist/esm/icons/search';
import Filter from 'lucide-react/dist/esm/icons/filter';
import './Store.css';

const StoreBase = () => {
  return (
    <div className="store-page">
      <header className="page-header store-header">
        <div className="container">
          <h1>TIENDA <span>EN LÍNEA</span></h1>
          <p>Próximamente: Compra tus llantas y accesorios desde la comodidad de tu hogar.</p>
        </div>
      </header>

      <section className="store-placeholder section-padding">
        <div className="container">
          <div className="store-controls">
            <div className="search-bar">
              <Search size={20} />
              <input type="text" placeholder="Buscar llantas (Ej. 205/55 R16)" disabled />
            </div>
            <div className="filter-btn disabled">
              <Filter size={20} /> Filtrar
            </div>
          </div>

          <motion.div 
            className="placeholder-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShoppingBag size={80} className="placeholder-icon" />
            <h2>ESTAMOS PREPARANDO EL CATÁLOGO</h2>
            <p>Muy pronto podrás consultar existencias, precios y realizar compras directamente aquí.</p>
            <div className="placeholder-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="skeleton-card">
                  <div className="skeleton-img"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text short"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoreBase;
