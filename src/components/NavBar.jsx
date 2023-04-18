import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        const currentlyUser = localStorage.getItem('currentlyUser');
        if (currentlyUser !== null) {
            const user = JSON.parse(currentlyUser);
            setUser(user.username)
        }
    }, [])

    const handleLogout = () => {
        props.setIsAuthenticated(false);
    }


    return (
        <div className="shadow-sm border-b">
            <div className="mx-auto max-w-screen-xl p-4">
                <div className="block sm:grid grid-cols-3 md:flex md:justify-between">

                    {/* Div 1 + 3 en móviles */}
                    <div className="sm:hidden flex-1 gap-4 flex justify-between">
                        <div className="flex gap-3 justify-center">
                            <p>Welcome, {user}</p>
                        </div>
                        <div>
                            <p>Want to </p>
                            <button className="text-sw-yellow inline-flex">
                                <span>log out?</span>
                            </button>
                        </div>
                    </div>


                    {/* Div 1 */}
                    <div className="hidden sm:flex flex-1 gap-4 p-10">
                        <div className="flex gap-3 justify-center">
                            <p>Welcome, {user}</p>
                        </div>
                    </div>

                    {/* Div 2 */}
                    <div className="flex justify-center sm:w-auto w-full">
                        <img
                            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                            alt="sw-yellow wars logo"
                            className="h-24 m-10"
                        />
                    </div>

                    {/* Div 3 */}
                    <div className="hidden sm:block md:flex gap-3 text-right justify-end flex-1 p-10">
                        <p className="">Want to</p>
                        <button
                            onClick={() => handleLogout()}
                            className="text-sw-yellow inline-flex">
                            <span>log out?</span>
                        </button>
                    </div>
                </div>

                <nav className="gap-8 flex justify-center">
                    <button className="text-gray-200 hover:text-white">
                        <Link to='/'>Home</Link>
                    </button>
                    <button className="text-gray-200 hover:text-white">
                        <Link to='/starships-list'>Starships List</Link>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;