import './CourseMain.scss'
import DefaultButton from '../DefaultButton/DefaultButton.jsx'

function Content({ content }) {
  const getCourseInscriptionUrl = id => `/inscricao/${id}`

  if (content.type == 'folder') return (
    <div className='content'>
      <DefaultButton
        type='button'>
        <span className='title'>{content.title}</span>
      </DefaultButton>
      {content.contents?.map(contentChildren => (
        <Content key={contentChildren.id} content={contentChildren} />
      ))}
    </div>
  )
  else return (
    <DefaultButton
      className='content'
      type='link'
      to={getCourseInscriptionUrl(content.id)}>
      <span className='title'>{content.title}</span>
    </DefaultButton>
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