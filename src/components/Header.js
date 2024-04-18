import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  GO_BACK,
  GPT_LOGO,
  LOGO,
  SUPPORTED_LANGUAGE,
  USER_AVATAR,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handelGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-col md:flex-row justify-between">
      <img className="hidden md:inline-block w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="  flex  p-2 "> 
          {showGptSearch && (
            <select
              className=" h-12 w-28 mr-3 bg-gray-500 bg-opacity-50 cursor-pointer hover:bg-opacity-70 "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img 
            onClick={handelGptSearchClick}
            className=" -mr-8  w-8 h-8 mx-auto  md:w-12 md:h-12 md:mr-3 bg-gray-500 bg-opacity-50 rounded-full"
            src={showGptSearch ? GO_BACK: GPT_LOGO}
            alt="GPT_LOGO"
          ></img>
          <div
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <img
              className=" hidden md:inline-block w-12 h-12 mr-3 cursor-pointer"
              src={user && user.photoURL ? user.photoURL : USER_AVATAR}
              alt="usericon"
            />
            {showDropdown && (
              <div className="absolute right-0 top-12  rounded-md shadow-md bg-gray-500 text-white bg-opacity-45">
                {user.displayName !== null && user.displayName !== "" && (
                  <p className="mb-2">Hello, {user.displayName}</p>
                )}
                <button onClick={handleSignOut} className="px-8">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
