import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './global.scss'
import App from './App.jsx'
import Home from './pages/Home';
import About from './pages/About';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
