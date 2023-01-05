import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
