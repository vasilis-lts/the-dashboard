import * as React from "react";
import { authState } from "../types";

interface AuthState {
  AuthStatus: authState
  GUserGroup: string
  AccessToken: null | string
  GUser: Record<string, any>
}

const defaultAuthState: AuthState = {
  AuthStatus: 'checkingAuth',
  GUser: {},
  AccessToken: null,
  GUserGroup: '',
};
const AuthContext = React.createContext<any | undefined>(
  undefined
);

const AuthProvider = (props) => {
  const [state, setState] = React.useState(defaultAuthState);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }
