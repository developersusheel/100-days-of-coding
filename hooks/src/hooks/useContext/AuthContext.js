import React, {useState, createContext} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [userdata, setUserdata] = useState({name: 'Susheel', email: 'sssmith098@gmail.com'})

  return (
    <AuthContext.Provider value={userdata}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
