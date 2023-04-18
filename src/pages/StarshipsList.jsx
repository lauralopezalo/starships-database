import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import errorPicture from "../assets/errorPicture.jpg"

function StarshipsList() {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/?page=${page}`)
            .then((response) => {
                setStarships((starships) => [...starships, ...response.data.results]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/?page=1`)
            .then((response) => {
                setStarships(response.data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <>
            <div className="bg-sw-black text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                        {starships.map((starship) => (
                            <div key={starship.name}>
                                <Link
                                    to={`/starships/${starship.name}`}
                                    state={{ url: starship.url }}>
                                    <div className="bg-sw-dark flex md:block overflow-hidden h-full rounded-lg border border-sw-dark shadow-xl transition hover:border-white hover:shadow-white/10"
                                    >
                                        <img
                                            alt=""
                                            src={`https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/").slice(-2, -1)[0]}.jpg`}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = errorPicture
                                            }}
                                            className="h-36 w-36 md:w-full md:h-64 object-cover"
                                        />
                                        <div className="p-8" >
                                            <h2 className="mt-4 text-xl font-bold text-white">{starship.name}</h2>
                                            <p className="mt-1 text-sm text-gray-300">
                                                Model: {starship.model}
                                            </p>
                                        </div></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}

export default StarshipsList;
