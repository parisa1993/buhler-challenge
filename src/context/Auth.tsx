import { createContext } from "react";
import { User } from "../models/User";

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });
