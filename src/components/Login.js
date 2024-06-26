import {
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValiData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, bg_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handelButtonClick = () => {
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";
    const nameValue = !isSignInForm && name.current ? name.current.value : "";

    const Message = checkValiData(emailValue, passwordValue, nameValue);
    setErrorMessage(Message);
    if (Message) return;

    //signIn/Up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    //sign In
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="relative bg-black bg-opacity-95">
        <img
          src={bg_IMG}
          alt="bgimg"
          className="h-screen object-cover w-full "
        />
        <div className=" w-11/12 absolute md:w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-black bg-opacity-65 p-8 rounded-lg  "
          >
            <h1 className="text-2xl font-bold mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                name=" name"
                id="name"
                placeholder="Enter your Name"
                className="w-full p-4  my-4  bg-zinc-900 opacity-75  border-zinc-400  rounded-md"
              />
            )}
            <input
              ref={email}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-4  my-4  bg-zinc-900 opacity-75  border-zinc-400 rounded-md"
            />
            <input
              ref={password}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-4 my-4 bg-zinc-900 opacity-75  border-zinc-400 rounded-md"
            />
            <p className="text-red-500 font-semibold">{errorMessage}</p>
            <button
              className="w-full p-4 my-4 py-2 bg-red-700 rounded-lg hover:bg-red-800"
              onClick={handelButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-2 ml-4 cursor-pointer" onClick={toggleSignForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up"
                : "Already registered?  Sign in"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
