import { useState } from "react"
import ProfileHeader from "../components/ProfileHeader/ProfileHeader"

function Profile() {
  const [getUser, setUser] = useState({
    name: 'Ageu Assunção Simões Galindo',
    // nickname: 'Bulovask',
    // email: 'ageu@gmail.com',
    // phone: '(87) 99969 7613'
  })
  const [getEditUser, setEditUser] = useState(false)
  
  const user = {getUser, setUser}
  const editUser = {getEditUser, setEditUser}

  return (
    <>
      <ProfileHeader userObj={user} editUserObj={editUser}/>
    </>
  )
}

export default Profile