import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../assets/firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const Login = () => {
  const [user, setUser] = useState(null);
  const handleLoginButton = () => {
    //console.log("login button clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHubButton = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .then((error) => console.log(error));
  };
  return (
    <div>
      <h2 className="text-4xl font-bold py-10">Please login</h2>
      {user ? (
        <button className="btn" onClick={() => handleSignOut()}>
          Sign out
        </button>
      ) : (
        <>
          <button className="btn" onClick={() => handleLoginButton()}>
            Login with Google
          </button>
          <button className="btn" onClick={() => handleGitHubButton()}>
            Login with GitHub
          </button>
        </>
      )}
      {/* <div>
        <h2>Name: {user?.displayName}</h2>
        //! ? means If user exist then display name. This is called optional chaining 
        <p>e-mail: {user?.email}</p>
        <img src={user?.photoURL} alt="" />
      </div> 
      //!  We can use this chaingin in the div rather than  eact elements*/}

      {/*
          //! If user exist then show the div 
          */}
      {user && (
        <div>
          <h2>Name: {user?.displayName}</h2>
          <p>e-mail: {user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
