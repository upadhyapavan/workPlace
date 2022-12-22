import React from "react";
import { auth } from "../../firebaseConfig";
import "./AuthenticationPage.css";
import googleIcon from "../../assets/googleIcon.png";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AuthenticationPage({ type }) {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (type === "candidate") {
          // user exists
          //? user exists as candidate
          //! user exists as employer

          // new user
          // redirect to onboarding page
          navigate("/candidate/onboarding");
        } else {
          // user exists
          //? user exists as candidate
          //! user exists as employer

          // new user
          // redirect to onboarding page
          navigate("/employer/onboarding");
        }
      })
      .catch((error) => {});
  };

  const signInWithFB = () => {
    const providerFB = new FacebookAuthProvider();

    signInWithPopup(auth, providerFB)
      .then((result) => {
        const user = result.user;

        if (type === "candidate") {
          navigate("/candidate/onboarding");
        } else {
          navigate("/employer/onboarding");
        }
        console.log(user);
      })
      .catch((error) => {});
  };

  return (
    <div className="auth-container">
      <h1>Welcome {type}</h1>
      <h2>SignIn</h2>
      <button onClick={signInWithGoogle}>
        <img alt="googleIcon" src={googleIcon} />
        <div>Sign in with Google</div>
      </button>
      <button onClick={signInWithFB}>
        <img alt="googleIcon" src={googleIcon} />
        <div>Sign in with Facebook</div>
      </button>
    </div>
  );
}

export default AuthenticationPage;
