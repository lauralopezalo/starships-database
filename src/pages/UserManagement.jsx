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
        <div className="min-h-screen py-20 font-light">
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
                                    className="w-full py-3 bg-sw-grey hover:bg-sw-yellow hover:text-black rounded inline-flex space-x-2 items-center justify-center">
                                    <span class="material-symbols-outlined">
                                        login
                                    </span>
                                    <span>Sign up</span>
                                </button>
                            </div>
                        </form>
                        <div className="flex gap-3 justify-center">
                            <p className="text-center">Already have an account?
                            </p>
                            <button onClick={() => setWannaCreateAccount(false)} className="text-sw-yellow inline-flex space-x-1 items-center">
                                Login
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
                                <button className="w-full py-3 bg-sw-grey hover:bg-sw-yellow hover:text-black rounded inline-flex space-x-2 items-center justify-center">
                                    <span class="material-symbols-outlined">
                                        login
                                    </span>
                                    <span>Login</span>
                                </button>
                            </div>
                        </form>
                        <div className="flex gap-3 justify-center">
                            <p className="text-center">Not registered yet?
                            </p>
                            <button
                                onClick={() => setWannaCreateAccount(true)}
                                className="text-sw-yellow inline-flex space-x-1 items-center">
                                Register now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}

export default UserManagement;
