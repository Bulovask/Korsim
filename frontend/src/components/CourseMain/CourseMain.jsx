import './CourseMain.scss'
import DefaultButton from '../DefaultButton/DefaultButton.jsx'
import { useState } from 'react'

function Content({ content }) {
  const getCourseActivityUrl = id => `/atividade/${id}`
  const [showContent, setShowContent] = useState(true)

  if (content.type == 'folder') return (
    <div className='content'>
      <DefaultButton
        onClick={() => setShowContent(!showContent)}
        type='button'>
          
        <span className='title'>{content.title}</span>
      </DefaultButton>
      <div style={{display: showContent ? 'block' : 'none'}}>
        {content.contents?.map(contentChildren => (
          <Content key={contentChildren.id} content={contentChildren} />
        ))}
      </div>
    </div>
  )
  else return (
    <div className='content'>
      <DefaultButton
        type='link'
        to={getCourseActivityUrl(content.id)}>
        <span className='title'>{content.title}</span>
      </DefaultButton>
    </div>
  )
}

function CourseMain({ courseObj }) {
  const [course] = [courseObj.getCourse]

  return <section className='CourseMain'>
    <h2>Conteúdos</h2>
    <div className='contents'>
      {course.contents?.map(content => (
        <Content key={content.id} content={content} />
      ))}
    </div>
  </section>
}

export default CourseMain