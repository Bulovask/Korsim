import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import './global.scss'

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/perfil' element={<Profile />} />
          <Route path='/perfil/:id' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
