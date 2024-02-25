import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import About from './pages/About';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/> 
          <Route exact path="/services" element={<Services/>} />
          <Route  exact path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
