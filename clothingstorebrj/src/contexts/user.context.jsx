import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  userProfile: null,
  setUserProfile: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const value = { userProfile, setUserProfile };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setUserProfile(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
