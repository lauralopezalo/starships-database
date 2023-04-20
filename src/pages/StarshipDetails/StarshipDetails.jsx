import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Films from "./components/Films";
import Pilots from "./components/Pilots";
import Spinner from "components/Spinner";
import errorImg from "../../assets/errorPicture.jpg"

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
        return (<Spinner />);
    }

    return (
        <div className="bg-sw-black">
            <div className="mx-auto max-w-screen-xl px-4 py-10 sm:py-14 sm:px-6 lg:py-18 lg:px-8">
                <div className="clip2 overflow-hidden bg-sw-dark sm:grid sm:grid-cols-2 rounded-lg border border-sw-dark">
                    <img
                        alt="starship"
                        src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `${errorImg}`
                        }}
                        className="h-full object-cover" />
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center sm:text-left">
                            <h2 className="text-xl font-bold md:text-3xl">
                                {starship.name}
                            </h2>
                            <p className="mt-6">Starship class: </p>
                            <p className="font-bold">{starship.starship_class}</p>
                            <p className="mt-3">Manufacturer:</p>
                            <p className="font-bold">{starship.manufacturer}</p>
                            <p className="mt-3">Cost in credits:</p>
                            <p className="font-bold">{starship.cost_in_credits}</p>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
                    <div className="p-4 border-l border-gray-500">
                        <p>Length:</p>
                        <p className="font-bold">{starship.length}</p>
                    </div>
                    <div className="p-4 border-l border-gray-500">
                        <p>Max atmosphering speed:</p>
                        <p className="font-bold">{starship.max_atmosphering_speed}</p>
                    </div>
                    <div className="p-4 border-l border-gray-500">
                        <p>Crew:</p>
                        <p className="font-bold">{starship.crew}</p>
                    </div>
                    <div className="p-4 border-l border-gray-500">
                        <p>Passengers:</p>
                        <p className="font-bold">{starship.passengers}</p>
                    </div>
                    <div className="p-4 border-l border-gray-500">
                        <p>Cargo capacity:</p>
                        <p className="font-bold">{starship.cargo_capacity}</p>
                    </div>
                    <div className="p-4 border-l border-gray-500">
                        <p>Consumables:</p>
                        <p className="font-bold">{starship.consumables}</p>
                    </div>
                    <div className="p-4 border-l border-gray-500">
                        <p>Hyperdrive rating:</p>
                        <p className="font-bold">{starship.hyperdrive_rating}</p>
                    </div>
                    <div className="p-4 border-l border-gray-500">
                        <p>MGLT:</p>
                        <p className="font-bold">{starship.MGLT}</p>
                    </div>
                </div>
            </div>
            {starship.films.length !== 0 && <Films films={starship.films} />}
            {starship.pilots.length !== 0 && <Pilots pilots={starship.pilots} />}
        </div>
    );
}

export default StarshipDetails;
