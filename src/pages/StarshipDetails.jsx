import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function StarshipDetails() {

    const [starship, setStarship] = useState(null);
    const { state } = useLocation();
    const starshipId = state.url.split("/").slice(-2, -1)[0];

    useEffect(() => {
        axios.get(state.url)
            .then((response) => { setStarship(response.data) })
            .catch((error) => { console.log(error) });
    }, [state.url]);


    if (!starship) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-sw-black text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="overflow-hidden bg-sw-dark sm:grid sm:grid-cols-2 rounded-lg border border-sw-dark">
                    <img
                        alt="starship"
                        src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                        }} />
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center sm:text-left">
                            <h2 className="text-lg font-bold md:text-3xl">
                                {starship.name}
                            </h2>
                            <p className="text-gray-300 md:mt-4 md:block">
                                Starship class: {starship.starship_class}</p>
                            <p className="text-gray-300 md:mt-4 md:block">
                                Manufacturer: {starship.manufacturer}</p>
                            <p className="text-gray-300 md:mt-4 md:block">
                                Cost in credits: {starship.cost_in_credits}</p>
                        </div>
                    </div>

                </div>

                <div>
                    <p>Length: {starship.length}</p>
                    <p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Cargo capacity: {starship.cargo_capacity}</p>
                    <p>Consumables: {starship.consumables}</p>
                    <p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
                    <p>MGLT: {starship.MGLT}</p>
                </div>
            </div>
        </div>
    );
}

export default StarshipDetails;
