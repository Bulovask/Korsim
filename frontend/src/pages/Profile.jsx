import { useState } from "react"
import ProfileHeader from "../components/ProfileHeader/ProfileHeader"
import ProfileMain from "../components/ProfileMain/ProfileMain"

function Profile() {
  const [getUser, setUser] = useState({
    id: 1,
    name: 'Ageu Assunção Simões Galindo',
    nickname: 'Bulovask',
    email: 'ageua75@gmail.com',
    phone: '(87) 99969 7613',
    inscriptions: [
      { 
        "id": 1,
        "course": "Revisão de Matemática com Recursos Digitais",
        "year": 2025,
        "semester": 1
      },
      { 
        "id": 2,
        "course": "Introdução à Programação para Iniciantes",
        "year": 2025,
        "semester": 1
      },
      { 
        "id": 3,
        "course": "História da Arte Contemporânea",
        "year": 2025,
        "semester": 2
      },
      { 
        "id": 4,
        "course": "Gestão de Projetos Ágeis",
        "year": 2025,
        "semester": 2
      },
      { 
        "id": 5,
        "course": "Psicologia Cognitiva Aplicada",
        "year": 2025,
        "semester": 1
      }
    ],
    matriculations: [
      { 
        "id": 1,
        "course": "Revisão de Matemática com Recursos Digitais",
        "year": 2025,
        "semester": 1
      },
      { 
        "id": 2,
        "course": "Introdução à Programação para Iniciantes",
        "year": 2025,
        "semester": 1
      },
      { 
        "id": 3,
        "course": "História da Arte Contemporânea",
        "year": 2025,
        "semester": 2
      },
      { 
        "id": 4,
        "course": "Gestão de Projetos Ágeis",
        "year": 2025,
        "semester": 2
      },
      { 
        "id": 5,
        "course": "Psicologia Cognitiva Aplicada",
        "year": 2025,
        "semester": 1
      }
    ]    
  })
  const [getEditUser, setEditUser] = useState(false)
  
  const user = {getUser, setUser}
  const editUser = {getEditUser, setEditUser}

  return (
    <>
      <ProfileHeader userObj={user} editUserObj={editUser} />
      <ProfileMain userObj={user} editUserObj={editUser} />
    </>
  )
}

export default Profile