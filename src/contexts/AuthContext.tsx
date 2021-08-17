import { ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

import { createContext } from "react";

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps){

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;
  
        if (!displayName || !photoURL || !email) {
          throw new Error("User does not have a display name or photo URL");
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email,
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL || !email) {
        throw new Error("User does not have a display name or photo URL");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email,
      });
    }

  }

  async function logOut() {
    await auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}