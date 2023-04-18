import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

function UserManagement(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useLocalStorage("users", []);

    const [currentlyUser, setcurrentlyUser] = useLocalStorage("currentlyUser", {});
    const [wannaCreateAccount, setWannaCreateAccount] = useState(false);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (users.find((user) => user.username === username)) {
            console.log("This username already exists");
            return;
        } else if (users.find((user) => user.email === email)) {
            console.log("This email is already registered");
            return;
        }
        setUsers([...users, { username, email, password }]);
        setcurrentlyUser({ username, email, password })
        props.setIsAuthenticated(true)
        console.log(`User ${username} registered`);
        navigate("/");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setcurrentlyUser(users.find(
            (user) => user.email === email && user.password === password
        ));
        if (currentlyUser.email) {
            console.log(`User ${username} logged in`);
            console.log(`currentlyUser: ${currentlyUser.username}`);
            props.setIsAuthenticated(true)
            navigate("/");
        } else {
            console.log("Invalid email or password");
        }
    };


    return (
        <div className="min-h-screen py-20">
            <div className="bg-sw-dark max-w-lg mx-auto p-8">
                <div className="flex justify-center">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="sw-yellow wars logo" className="h-24 m-10" />
                </div>
                {wannaCreateAccount ? (
                    <div>
                        <form onSubmit={handleRegister} className="my-10">
                            <div className="flex flex-col space-y-5">
                                <label htmlFor="username" className="text-sw-yellow pb-2">
                                    <p className="text-sw-yellow pb-2">Name</p>
                                    <input
                                        id="username" name="username" type="text"
                                        placeholder="Enter your name"
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="text-black w-full py-3 border rounded px-3 focus:outline-none focus:border-sw-yellow focus:bg-sw-grey focus:text-sw-yellow" />
                                </label>
                                <label htmlFor="email">
                                    <p className="text-sw-yellow pb-2">Email address</p>
                                    <input
                                        id="email" name="email" type="email"
                                        placeholder="Enter your email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="text-black w-full py-3 border rounded px-3 focus:outline-none focus:border-sw-yellow focus:bg-sw-grey focus:text-sw-yellow" />
                                </label>
                                <label htmlFor="password">
                                    <p className="text-sw-yellow pb-2">Password</p>
                                    <input id="password" name="password" type="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="text-black w-full py-3 border rounded px-3 focus:outline-none focus:border-sw-yellow focus:bg-sw-grey focus:text-sw-yellow" />
                                </label>
                                <button
                                    className="w-full py-3 font-medium text-white bg-sw-grey hover:bg-sw-yellow hover:text-black rounded inline-flex space-x-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Sign up</span>
                                </button>
                            </div>
                        </form>
                        <div className="flex gap-3 justify-center">
                            <p className="text-center text-white">Already have an account?
                            </p>
                            <button onClick={() => setWannaCreateAccount(false)} className="text-sw-yellow inline-flex space-x-1 items-center">
                                <span>Login</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                ) : (

                    <div>
                        <form onSubmit={handleLogin} className="my-10">
                            <div className="flex flex-col space-y-5">
                                <label htmlFor="email">
                                    <p className="text-sw-yellow pb-2">Email address</p>
                                    <input id="email" name="email" type="email"
                                        placeholder="Enter email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="text-black w-full py-3 border rounded px-3 focus:outline-none focus:border-sw-yellow focus:bg-sw-grey focus:text-sw-yellow" />
                                </label>
                                <label htmlFor="password">
                                    <p className="text-sw-yellow pb-2">Password</p>
                                    <input id="password" name="password" type="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="text-black w-full py-3 border rounded px-3 focus:outline-none focus:border-sw-yellow focus:bg-sw-grey focus:text-sw-yellow" />
                                </label>
                                <button className="w-full py-3 font-medium text-white bg-sw-grey hover:bg-sw-yellow hover:text-black rounded inline-flex space-x-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Login</span>
                                </button>
                            </div>
                        </form>
                        <div className="flex gap-3 justify-center">
                            <p className="text-center text-white">Not registered yet?
                            </p>
                            <button
                                onClick={() => setWannaCreateAccount(true)}
                                className="text-sw-yellow inline-flex space-x-1 items-center">
                                <span>Register now</span>
                                <span>
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-4 w-4" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="2">
                                        <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}

export default UserManagement;
