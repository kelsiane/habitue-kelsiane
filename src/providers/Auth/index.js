import { createContext, useContext } from "react";

//CRIAR CONTEXT
//CRIAR PROVIDER
//NOMEContext.PROVIDER E OS VALORES

const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
