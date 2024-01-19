import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Estimate from './pages/Estimate';
import Receipt from './pages/Receipt';
import Pricing from './pages/Pricing';

function App() {

  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-estimate" element={<Estimate />} />
          <Route path="/new-receipt" element={<Receipt />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
  )
}

export default App
