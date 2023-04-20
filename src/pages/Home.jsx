import React from "react";
import { Link } from 'react-router-dom';
import databaseImg from '../assets/database-title.png'

const Home = () => {
    return (

        <div className="p-8 md:p-12 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-lg">
                    Welcome to our website dedicated to the spacecrafts featured in the iconic Star Wars saga! Here, you will find a vast collection of information on all the spaceships from the series, including detailed specifications and images.
                    <br />
                    Whether you're a die-hard Star Wars fan or simply curious about the incredible designs and capabilities of these legendary spacecraft, you're sure to find something that will pique your interest. From the iconic Millennium Falcon to the fearsome Imperial Star Destroyers, we've got it all covered.
                    <br />
                    So come and explore our website, and immerse yourself in the rich and captivating world of Star Wars spacecraft. May the Force be with you!
                </h2>
                <div className="flex justify-center mt-4 mb-8">
                    <img
                        src={databaseImg}
                        alt="" />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button className="btn py-2 px-4 rounded-full bg-sw-dark border border-sw-yellow shadow-xl transition hover:shadow hover:ring-1 hover:ring-white hover:shadow-white/10 active:bg-sw-yellow active:text-sw-black active:ring-0 active:shadow-none">
                    <Link to='/starships-list'>Get started</Link>
                </button>
            </div>

        </div>
    )
}
export default Home;