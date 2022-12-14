import React, {useContext} from 'react'
import { AuthContext } from './AuthContext'

const Register = () => {
  const {name, email} = useContext(AuthContext);
  return (
    <div>
      Name: {name}
      Email: {email}
    </div>
  )
}

export default Register