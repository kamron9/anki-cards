import AuthService from "@/service/authService";
import { createContext, useContext, useState } from "react";

export interface AuthProps {
  fullName: string;
  username: string;
  password: string;
}
//fix this bug

interface loginProps {
  username: string;
  password: string;
}

interface AuthContextProps {
  user: AuthProps | loginProps | null;
  login: (authData: AuthProps) => string | void;
  register: (authData: AuthProps) => string | void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  register: () => {},
});

export const useAuth = () => useContext(AuthContext);

//create type for AuthProvider

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthProps | loginProps | null>(null);

  // for login
  const login = async ({ username, password }: loginProps) => {
    try {
      const res = await AuthService.signIn({ username, password });

      if (res.token) {
        localStorage.setItem("token", res.token);
        setUser({ username, password });
      }
    } catch (error: any) {
      return error.response.data.errors[0].detail;
    }
  };
  // for register
  const register = async ({ fullName, username, password }: AuthProps) => {
    try {
      const res = await AuthService.signUp({
        full_name: fullName,
        username,
        password,
      });

      if (res.token) {
        localStorage.setItem("token", res.token);
        setUser({ fullName, username, password });
      }
    } catch (error: any) {
      return error.response.data.errors[0].detail;
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
