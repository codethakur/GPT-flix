import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { GPT_LOGO, LOGO, USER_AVATAR } from "../utils/constants";
import {toggleGptSearchView} from "../utils/gptSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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

 const  handelGptSearchClick = ()=>{
  dispatch(toggleGptSearchView());
 }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };



  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10   flex justify-between">
      <img 
         
        className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="  flex justify-between  p-2 mr-3">
          <img
          onClick={handelGptSearchClick}
            className="w-12 h-12 mr-3 rounded-full "
            src={GPT_LOGO}
            alt="GPT_LOGO"
          ></img>
          <div
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <img
              className="w-12 h-12 mr-3 cursor-pointer"
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
