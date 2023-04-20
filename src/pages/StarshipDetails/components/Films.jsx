import React, { useState, useEffect } from "react";
import axios from "axios";

function Films(props) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        async function fetchFilms() {
            const promises = props.films.map(async (url) => {
                try {
                    const response = await axios.get(url);
                    return response.data;
                } catch (error) {
                    console.log(error);
                    return;
                }
            });
            const films = await Promise.all(promises);
            setFilms(films);
        }

        fetchFilms();
    }, [props.films]);

    return (
        <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:pb-12 sm:px-6 lg:pb-16 lg:px-8">
            <h2 className="font-bold text-xl">Films</h2>
            <hr className="border-gray-500"/>
        <div className="flex flex-wrap gap-5 pt-12">
            {films.map((film, index) => (
                <div key={index} className="bg-sw-dark h-70 w-52 rounded-lg shadow-md overflow-hidden">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/films/${film.url.split("/").slice(-2, -1)[0]}.jpg`}
                        alt={film.title}
                        className="w-full h-52 object-cover object-top" />
                    <div className="p-4">
                    <p>Episode {film.episode_id}:</p>
                        <p className="font-bold">{film.title}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Films;
