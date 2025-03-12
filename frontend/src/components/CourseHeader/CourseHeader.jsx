import './CourseHeader.scss'
import FishIcon from '../../assets/fish.svg?react'
import ConfigIcon from '../../assets/config.svg?react'
import DefaultButton from '../DefaultButton/DefaultButton.jsx'
import DefautAnchor from '../DefaultAchor/DefaultAnchor.jsx'

function CourseHeader({courseObj}) {
  const course = courseObj.getCourse

  return <header className='CourseHeader'>
    <div className='icon'>
      <FishIcon className='w-full h-full' />
    </div>

    <div className='names'>
      <span className='name'>{course?.name}</span>
    </div>

    <div className='config'>
      <DefaultButton type='button' className='borderless' onClick={() => true}>
        <ConfigIcon className='w-4 h-4'/>
      </DefaultButton>
    </div>

    <div className='info'>
      <span className='label'>Email</span>
      <DefautAnchor href={'mailto:' + (course?.email || '#')} disabled={!course?.email}>
        {course?.email || 'Não Disponível'}
      </DefautAnchor>
      <span className='label'>Telefones</span>
      {course?.phones.map((phone, index) => (
        <DefautAnchor key={index} href={'tel:' + (phone)}>
          {phone}
        </DefautAnchor>
      ) || 'Não Disponível')}
    </div>
  </header>
}

export default CourseHeader