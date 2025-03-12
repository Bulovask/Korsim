import './ProfileMain.scss'
import DefaultButton from '../DefaultButton/DefaultButton.jsx'
import { useState } from 'react'
import AngleDownIcon from '../../assets/angleDown.svg?react'
import AngleTopIcon from '../../assets/angleTop.svg?react'

function ProfileMain({userObj}) {
  const [user] = [userObj.getUser, userObj.setUser]
  const getCourseMatriculationUrl = id => `/curso/${id}`
  const getCourseInscriptionUrl = id => `/inscricao/${id}`
  const [hideInscriptions, setHideInscriptions] = useState(false)
  const [hideMatriculations, setHideMatriculations] = useState(false)

  return <section className='ProfileMain'>
    <div className='my-column'>
      <h2 onClick={() => setHideInscriptions(!hideInscriptions)}>
        Inscrições
        {hideInscriptions ? <AngleDownIcon className='size-5' /> : <AngleTopIcon className='size-5' />}
      </h2>
      <div className={'inscriptions' + (hideInscriptions ? ' hide' : '')}>
        {user.inscriptions?.map(inscription => (
          <DefaultButton className='inscription'
            type='link'
            to={getCourseInscriptionUrl(inscription.id)}
            key={inscription.id}>
            <span className='course'>{inscription.course}</span>
            <span className='date'>{inscription.year}.{inscription.semester}</span>
          </DefaultButton>
        ))}
      </div>
    </div>
    <div className='my-column'>
      <h2 onClick={() => setHideMatriculations(!hideMatriculations)}>
        Matrículas
        {hideMatriculations ? <AngleDownIcon className='size-5' /> : <AngleTopIcon className='size-5' />}
      </h2>
      <div className={'matriculations'  + (hideMatriculations ? ' hide' : '')}>
      {user.matriculations?.map(matriculation => (
          <DefaultButton className='matriculation' 
            type='link'
            to={getCourseMatriculationUrl(matriculation.id)} 
            key={matriculation.id}>
            <span className='course'>{matriculation.course}</span>
            <span className='date'>{matriculation.year}.{matriculation.semester}</span>
          </DefaultButton>
        ))}
      </div>
    </div>
  </section>
}

export default ProfileMain