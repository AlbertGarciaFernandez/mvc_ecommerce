import React, { useReducer, createContext } from "react";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const authInitialState = {
  user: null,
  isAuthenticated: false,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

function authReducer(state, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: {
          ...action.payload,
        },
        isAuthenticated: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
}

export function AuthContextProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  function login(user) {
    dispatch({
      type: LOGIN,
      payload: user,
    });
  }

  function logout() {
    dispatch({
      type: LOGOUT,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;