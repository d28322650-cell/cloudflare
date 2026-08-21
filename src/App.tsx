import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeArtistic from './pages/HomeArtistic';
import AboutArtistic from './pages/AboutArtistic';
import HistoryArtistic from './pages/HistoryArtistic';
import ContactArtistic from './pages/ContactArtistic';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Navbar from './components/navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeArtistic />} />
        

        <Route path="/about" element={<AboutArtistic />} />
        

        
        

        <Route path="/history" element={<HistoryArtistic />} />
        

        <Route path="/contact" element={<ContactArtistic />} />


        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        

        <Route path="/terms" element={<Terms />} />

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}