import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Interno from './components/Interno';
import Personal from './components/Personal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <MyNavbar />
        </header>
        <Container>
          <Routes>
            {/* Rotte Navbar */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            {/* Rotta secondaria da About */}
            <Route path="/about/interno" element={<Interno />} />
            {/* Rotta dopo il login */}
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
