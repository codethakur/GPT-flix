import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const toggleSignForm = () => {
        setSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="relative ">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="bgimg"
                    className="w-full bg-black bg-opacity-75"
                />
                <div className="absolute w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    <form className="bg-black bg-opacity-75 p-8 rounded-lg  ">
                        <h1 className="text-2xl font-bold mb-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                        {!isSignInForm && (
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your Name"
                                className="w-full p-4  my-4  bg-zinc-900 opacity-75  border-zinc-400  rounded-md"
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-4  my-4  bg-zinc-900 opacity-75  border-zinc-400 rounded-md"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-4 my-4 bg-zinc-900 opacity-75  border-zinc-400 rounded-md"
                        />
                        <button className="w-full p-4 my-4 py-2 bg-red-700 rounded-lg hover:bg-red-800">
                            {isSignInForm ? "Sign In" : "Sign Up"}
                        </button>
                        <p className="py-2 ml-4 cursor-pointer" onClick={toggleSignForm}>
                            {isSignInForm ? "New to Netflix? Sign Up" : "Already registered?  Sign in"}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
