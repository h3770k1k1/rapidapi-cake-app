import React from "react";
import { useAuth } from "./AuthProvider";

const AuthDetails = () => {
  const { authUser, userSignOut } = useAuth();

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
