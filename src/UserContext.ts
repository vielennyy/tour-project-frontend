import { createContext} from 'react';
import { UserContextTypes} from "./components/TypesAndInterfaces";
import { PopupContextTypes } from "./components/TypesAndInterfaces";

export const UserContext = createContext({
  user: {
    isAuthorize: false,
    token: '',
    id: ''
  },
  setUser: ({}: UserContextTypes) => {}
});

export const PopupContext = createContext({
  popup:  {
    isOpen: false
  },
  setIsOpen: ({}:PopupContextTypes) => {}
})

export const TestContext = createContext({
  setTestOpen: (value:boolean):void => {},
  testOpen: false
});

