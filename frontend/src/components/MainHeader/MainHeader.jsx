import './MainHeader.scss'
import DefaultButton from '../DefaultButton/DefaultButton'
import MenuIcon from '../../assets/menu.svg?react'

function MainHeader({ title, mainMenu }) {
  return (
    <header className='MainHeader'>
      <div>
        <span className='title'>{title || 'Korsim'}</span>
      </div>
      <div>
        <DefaultButton type='button' className='borderless' onClick={() => mainMenu.setMenuVisibility(!mainMenu.menuVisibility)}>
          <MenuIcon className={'w-5 h-5 fill-white MenuIcon ' + (mainMenu.menuVisibility ? 'x' : '')} />
        </DefaultButton>
      </div>
    </header>
  )
}

export default MainHeader