import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Booking from './pages/Booking/Booking'
import Documents from './pages/Documents/Documents'
import StoreBase from './pages/Store/StoreBase'
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/citas" element={<Booking />} />
          <Route path="/documentos" element={<Documents />} />
          <Route path="/tienda" element={<StoreBase />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  )
}

export default App
