import { createContext, useEffect, useState } from "react";
import { checkAuth, Login, Logout } from "../../services/LoginService";
import role from "../../config/enums/role";

interface AuthContextType {
  isAuthenticated: boolean | undefined;
  isLoading: boolean
  login: () => void;
  logout: () => void;
} 

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const login = () => {
    setIsLoading(true)
    Login({nickname : "gabriel", password : "123", role : role.ADMINISTRATOR, username : "gabriel"})
    .finally(() => setIsLoading(false))
  }

  const logout = () => {
    setIsLoading(true)

    Logout().finally(()=>{
      setIsLoading(false)

    })
  }

  useEffect(() => {
    setIsAuthenticated(checkAuth)
  }, [])

  return (
    <AuthContext.Provider value={{isLoading, isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}