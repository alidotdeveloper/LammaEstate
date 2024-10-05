import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState(false);
  const [ userInfo, setUserInfo ] = useState(false);
  const [postInfo, setPostInfo] = useState('');

  return (
    <AuthContext.Provider value={{ auth, setAuth, userInfo, setUserInfo, postInfo, setPostInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
