import React from 'react'

export const AuthContext = React.createContext();

const AuthContextProvided = ({children}) => {
  const [seelogin,setSeelogin]=React.useState(false);
  const log=()=>{
    setSeelogin(!seelogin);
    console.log(seelogin);
  }
  return (
    <AuthContext.Provider value={{login:seelogin,log:log}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvided