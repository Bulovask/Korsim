import DefaultButton from '../DefaultButton/DefaultButton'
import './MainMenu.scss'
import XisIcon from '../../assets/x.svg?react'

function MainMenu({mainMenu}) {

  const closeMenu = () =>mainMenu.setMenuVisibility(false)

  return (
    <aside className={mainMenu.menuVisibility ? 'MainMenu' : 'MainMenu hide'}>
      <button className='closeBtn' onClick={closeMenu}>
        <XisIcon className='w-3 h-3 fill-white' />
      </button>
      <div className='container'>
        <DefaultButton type='link' to='/' onClick={closeMenu}>Página Inicial</DefaultButton>
        <DefaultButton type='link' to='/perfil' onClick={closeMenu}>Perfil</DefaultButton>
        <DefaultButton type='link' to='/curso' onClick={closeMenu}>Curso</DefaultButton>
        <DefaultButton type='link' to='/perfil' onClick={closeMenu}>Perfil</DefaultButton>
        <DefaultButton type='link' to='/perfil' onClick={closeMenu}>Perfil</DefaultButton>
      </div>
    </aside>
  )
}

export default MainMenu