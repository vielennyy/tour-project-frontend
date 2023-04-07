import { createContext} from 'react';
import { UserContextTypes} from "./components/TypesAndInterfaces";
import {boolean, string} from "yup";

export const UserContext = createContext({
  user: {
    isAuthorize: false,
    token: '',
    id: ''
  },
  setUser: ({}: UserContextTypes) => {}
});

