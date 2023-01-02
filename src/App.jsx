import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import About from './About';
import Navbar from './Components/Navbar';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
