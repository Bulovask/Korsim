import { Outlet } from 'react-router-dom'

import MainHeader from './components/MainHeader/MainHeader'
import MainMenu from './components/MainMenu/MainMenu'

import './App.scss'
import { useState } from 'react'

function App() {
  const [menuVisibility, setMenuVisibility] = useState(false)
  const mainMenu = {menuVisibility, setMenuVisibility}

  return (
    <>
      <MainHeader mainMenu={mainMenu} />
      <MainMenu mainMenu={mainMenu} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
