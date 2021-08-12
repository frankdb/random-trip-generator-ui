import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import setAuthToken from "../utilities/setAuthToken";

const authContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState({
    isLoading: true,
    token: null,
    isAuthenticated: false,
  });

  const signup = (name, email, password) => {
    return axios
      .post(
        "http://localhost:3000/api/user/signup",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        setUser({ ...user, isLoading: false, token, isAuthenticated: true });
        localStorage.setItem("token", token);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  const login = (email, password) => {
    return axios
      .post("http://localhost:3000/api/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        setUser({ ...user, isLoading: false, token, isAuthenticated: false });
        localStorage.setItem("token", token);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };
  const signout = () => {
    localStorage.removeItem("token");
    setUser({ ...user, isLoading: false, token: null });
    return "Signed out";
    // return firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     setUser(false);
    //   });
  };
  const sendPasswordResetEmail = (email) => {
    return null;
    // return firebase
    //   .auth()
    //   .sendPasswordResetEmail(email)
    //   .then(() => {
    //     return true;
    //   });
  };
  const confirmPasswordReset = (code, password) => {
    return null;
    // return firebase
    //   .auth()
    //   .confirmPasswordReset(code, password)
    //   .then(() => {
    //     return true;
    //   });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ ...user, isLoading: false, token, isAuthenticated: true });
      setAuthToken(user.token);
    }

    // if (user.token) {
    //   setAuthToken(user.token);
    // }
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });
    // // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);
  return {
    user,
    login,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
