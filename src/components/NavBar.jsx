import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const currentlyUser = localStorage.getItem("currentlyUser");
        if (currentlyUser !== null) {
            const user = JSON.parse(currentlyUser);
            setUser(user.username);
        }
    }, []);

    const handleLogout = () => {
        props.setIsAuthenticated(false);
    };

    return (
        <div className="shadow-sm border-b border-gray-500">
            <div className="mx-auto max-w-screen-xl p-3">
                <div className="block sm:grid grid-cols-3 md:flex md:justify-between">

                    <div className="hidden sm:flex flex-1 gap-4 p-4">
                        <div className="flex gap-3 justify-center">
                            <p>Welcome, {user}</p>
                        </div>
                    </div>

                    <div className="flex justify-center sm:w-auto w-full">
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                            alt="sw-yellow wars logo"
                            className="h-20 m-3 mb-8"
                        />
                    </div>

                    <div className="absolute top-0 right-0 sm:relative sm:block md:flex gap-3 text-right justify-end flex-1 p-4">
                        <button
                            onClick={() => handleLogout()}
                            className="text-sw-yellow inline-flex" >
                            <span className="material-symbols-outlined">logout</span>
                        </button>
                    </div>
                </div>

                <nav className="gap-8 flex justify-center mt-2">
                    <button className="text-gray-200 hover:text-white font-normal uppercase">
                        <Link to="/">Home</Link>
                    </button>
                    <button className="text-gray-200 hover:text-white font-normal uppercase">
                        <Link to="/starships-list">Starships List</Link>
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
