import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/thisIsNotMeme.jpg"

const NotFound = () => {
    return (
            <div className="flex flex-col h-screen p-32 gap-12">
                <div>
                    <img
                        src={NotFoundImg}
                        alt=""
                        className="w-auto h-56 mx-auto text-black sm:h-64"
                    />
                </div>

                <div className="flex items-center justify-center flex-1">
                    <div className="max-w-xl px-4 py-8 mx-auto text-center">
                        <p className="text-2xl font-medium tracking-tight sm:text-4xl">
                            404... Oops!
                        </p>
                        <button className="btn py-2 px-4 rounded-full bg-sw-dark border border-sw-yellow shadow-xl transition hover:shadow hover:ring-1 hover:ring-white hover:shadow-white/10 active:bg-sw-yellow active:text-sw-black active:ring-0 active:shadow-none mt-12">
                            <Link to='/starships-list'>Go back home</Link>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default NotFound;