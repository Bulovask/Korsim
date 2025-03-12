import { useState } from "react";
import CourseHeader from "../components/CourseHeader/CourseHeader";
import CourseMain from "../components/CourseMain/CourseMain";

function Course() {
  const [getCourse, setCourse] = useState({
      id: 1,
      name: 'Revisão da Matemática Básica com Recursos Digitais',
      email: 'contato@extensao.edu.br',
      phones: ['(99) 99999 9999', '(88) 88888 8888'],
      year: 2025,
      semester: 1,
      contents: [
        {
          id: 1,
          title: 'Seção 1',
          type: 'folder',
          contents: [
            {
              id: 2,
              title: 'Seção 2',
              type: 'folder',
              contents: [
                {
                  id: 3,
                  title: 'Seção 3',
                  type: 'folder',
                  contents: [
                    {
                      id: 4,
                      title: 'Seção 4',
                      type: 'folder',
                      contents: []
                    },
                    {
                      id: 5,
                      title: 'Atividade 1',
                      type: 'activity'
                    }
                  ]
                },
                {
                  id: 6,
                  title: 'Atividade 2',
                  type: 'activity'
                }
              ]
            },
            {
              id: 7,
              title: 'Atividade 3',
              type: 'activity'
            }
          ]
        },
        {
          id: 8,
          title: 'Atividade 4',
          type: 'activity'
        },
        {
          id: 9,
          title: 'Seção 5',
          type: 'folder',
          contents: [
            {
              id: 10,
              title: 'Seção 6',
              type: 'folder',
              contents: [
                {
                  id: 11,
                  title: 'Seção 7',
                  type: 'folder',
                  contents: [
                    {
                      id: 12,
                      title: 'Seção 8',
                      type: 'folder',
                      contents: []
                    },
                    {
                      id: 13,
                      title: 'Atividade 1',
                      type: 'activity'
                    }
                  ]
                },
                {
                  id: 14,
                  title: 'Atividade 2',
                  type: 'activity'
                }
              ]
            },
            {
              id: 15,
              title: 'Atividade 3',
              type: 'activity'
            }
          ]
        },
        {
          id: 16,
          title: 'Atividade 4',
          type: 'activity'
        }
      ]
    })

    const course = {getCourse, setCourse}

  return (
    <>
      <CourseHeader courseObj={course} />
      <CourseMain courseObj={course} />
    </>
  )
}

export default Course;