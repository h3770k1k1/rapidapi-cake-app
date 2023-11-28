import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState, useEffect } from "react";

const AuthDetails = ({ onLogout }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      {authUser ? (
        <>
          <button onClick={onLogout}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
