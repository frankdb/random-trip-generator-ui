import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import setAuthToken from "../utilities/setAuthToken";

const authContext = createContext(null);
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState({
    isLoading: true,
    token: null,
  });
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signup = (name, email, password) => {
    console.log("IN HOOK===", name, email, password);

    return axios
      .post("http://localhost:3000/api/user/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setUser({ ...user, isLoading: false, token: res.data.token });
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };
  const signin = (email, password) => {
    return axios
      .post("http://localhost:3000/api/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setUser({ ...user, isLoading: false, token: res.data.token });
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };
  const signout = () => {
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
    if (user.token) {
      setAuthToken(user.token);
    }
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });
    // // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, [user]);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
