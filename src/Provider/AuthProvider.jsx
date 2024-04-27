import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const gitHubLogin = () =>{
    return signInWithPopup(auth, gitHubProvider)
  }
 

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [reload]);

  const authInfo = {
    createUser,
    userLogout,
    updateUserProfile,
    loginUser,
    setReload,
    setUser,
    user,
    googleLogin,
    gitHubLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
