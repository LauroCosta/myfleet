import { ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

import { createContext } from "react";
import { useHistory } from "react-router-dom";

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
  signed: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps){

  const history = useHistory();

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

        setSigned(true);
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  const [user, setUser] = useState<User>();
  const [signed, setSigned] = useState(false);
 
  function isVehicle(){

    let count = 0;
    var ref = firebase.database().ref("vehicles");
    ref.orderByChild("user").equalTo(String(user?.id)).on("child_added", function (snapshot) {
      

      count++;
    });

    if (count == 0) {
      history.push("/choose");
    }else{
      history.push("/dashboard");
    }
  }

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


      isVehicle();
      setSigned(true);
    }

  }

  async function logOut() {
    auth.signOut().then(() => {
      setSigned(false);
      history.push("/");
    });
    
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logOut, signed }}>
      {props.children}
    </AuthContext.Provider>
  );
}