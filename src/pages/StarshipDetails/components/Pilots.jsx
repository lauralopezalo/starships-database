import React, { useState, useEffect } from "react";
import axios from "axios";

function Pilots(props) {
    const [pilots, setPilots] = useState([]);

    useEffect(() => {
        async function fetchFilms() {
            const promises = props.pilots.map(async (url) => {
                try {
                    const response = await axios.get(url);
                    return response.data;
                } catch (error) {
                    console.log(error);
                    return;
                }
            });
            const pilots = await Promise.all(promises);
            setPilots(pilots);
        }

        fetchFilms();
    }, [props.pilots]);

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-10 sm:px-6 lg:py-12 lg:px-8">
            <h2 className="font-bold text-xl">Pilots</h2>
            <hr className="border-gray-500"/>
        <div className="flex flex-wrap gap-5 pt-12">
            {pilots.map((pilot, id) => (
                <div key={id} className="bg-sw-dark h-80 w-52 rounded-lg shadow-md overflow-hidden">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${pilot.url.split("/").slice(-2, -1)[0]}.jpg`}
                        alt={pilot.name}
                        className="w-full h-52 object-cover object-top" />
                    <div className="p-4">
                        <p className="font-bold">{pilot.name}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Pilots;
