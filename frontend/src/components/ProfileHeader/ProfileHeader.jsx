import './ProfileHeader.scss'
import UserIcon from '../../assets/user.svg?react'
import PencilIcon from '../../assets/pencil.svg?react'
import DefaultButton from '../DefaultButton/DefaultButton.jsx'
import DefautAnchor from '../DefaultAchor/DefaultAnchor.jsx'
import { useState } from 'react'

function ProfileHeader({userObj, editUserObj}) {
  const [user, setUser] = [userObj.getUser, userObj.setUser]
  const [userTemp, setUserTemp] = useState({...user})
  const [editUser, setEditUser] = [editUserObj.getEditUser, editUserObj.setEditUser]


  const setNameTemp = name => setUserTemp({...userTemp, name})
  const setEmailTemp = email => setUserTemp({...userTemp, email})
  const setPhoneTemp = phone => setUserTemp({...userTemp, phone})

  const saveUser = () => {
    setUser({...userTemp})
    setEditUser(false)
    // Salvar no servidor
  }

  const cancelEdit = () => {
    setEditUser(false)
    setUserTemp(user)
  }

  return <header className='ProfileHeader'>
    <div className='icon'>
      <UserIcon className='w-full h-full' />
    </div>

    <div className='names'>
      <span className='nickname'>{user?.nickname}</span>
      <span className='name'>{user?.name}</span>
    </div>

    <div className='config'>
      <DefaultButton type='button' className='borderless' onClick={() => setEditUser(true)}>
        <PencilIcon className='w-4 h-4'/>
      </DefaultButton>
    </div>

    <div className='info'>
      <span className='label'>Email</span>
      <DefautAnchor href={'mailto:' + (user?.email || '#')} disabled={!user?.email}>
        {user?.email || 'Não Disponível'}
      </DefautAnchor>
      <span className='label'>Telefone</span>
      <DefautAnchor href={'tel:' + (user?.phone || '#')} disabled={!user?.phone}>
        {user?.phone || 'Não Disponível'}
      </DefautAnchor>
    </div>

    <div className={`editUserShadow ${editUser ? '' : 'hidden'}`}>
      <form id='editUserPopup'>
        <span className='title'>Editar Usuário</span>

        <label htmlFor='name'>Nome</label>
        <input id='name' type="text" value={userTemp.name} onChange={(e) => setNameTemp(e.target.value)}/>
        
        <label htmlFor='email'>Email</label>
        <input required id='email' type="email" value={userTemp.email} onChange={(e) => setEmailTemp(e.target.value)}/>
        
        <label htmlFor='phone'>Telefone/Celular</label>
        <input id='phone' type="phone" value={userTemp.phone} onChange={(e) => setPhoneTemp(e.target.value)}/>
        
        <DefaultButton onClick={saveUser}>
          Salvar
        </DefaultButton>
        <DefaultButton onClick={cancelEdit}>
          Cancelar
        </DefaultButton>
      </form>
    </div>
  </header>
}

export default ProfileHeader