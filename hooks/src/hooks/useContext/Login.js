import React, {useContext} from 'react'
import { AuthContext } from './AuthContext'
// import Register from './Register'

const Login = (props) => {

  const userData = useContext(AuthContext);

  return (
    <div>
      Name: {userData.name}
      Email: {userData.email}
    </div>
  )
}

export default Login
