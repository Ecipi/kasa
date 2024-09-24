import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
        <Footer />
    </Router>
  );
};

export default AppRouter;