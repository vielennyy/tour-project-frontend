import { createContext} from 'react';

export const UserContext = createContext({
  isAuthorize: false,
  setIsAuthorize: (b: boolean) => {}
});
