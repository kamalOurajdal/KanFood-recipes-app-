import React, { useState } from 'react';
import homeHero from '../assets/images/home-hero.jpg';

function HeroHome(props: any) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        setIsDropdownOpen(value.length > 2);
    };

    return (
        <div>
            <div className="bg-red-50 relative">
                <img
                    className="object-cover w-full h-[600px] sm:h-[500px]"
                    src={homeHero}
                    alt="hero image"
                />
                <div className="bg-black/30 absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-8 leading-tight sm:leading-[1.2]">
                            Fresh ingredients,<br className="hidden sm:inline" /> endless possibilities.
                        </h1>
                        <p className="text-sm sm:text-base text-gray-50 text-center max-w-xl mx-auto">
                            Explore thousands of recipes, create your own, and connect with food lovers worldwide
                        </p>
                    </div>
                    {/* Search bar */}
                    <div className="w-full mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0">
                        <div className="relative w-full sm:w-1/2 max-w-xl">
                            <div>
                                <input
                                    onChange={handleSearchTermChange}
                                    value={searchTerm}
                                    type="text"
                                    placeholder="Search for recipes"
                                    className={`block w-full p-3 sm:p-4 rounded-[28px] outline-none border text-sm sm:text-base ${
                                        isDropdownOpen ? "rounded-b-none" : "rounded-b-[28px]"
                                    }`}
                                />
                            </div>

                            {/* drop down of suggestion */}
                            <div
                                className={`absolute z-50 top-full bg-white p-2 rounded-b-md shadow-md w-full ${
                                    isDropdownOpen ? "block" : "hidden"
                                }`}
                            >
                                <ul>
                                    <li className="p-2 cursor-pointer hover:bg-orange-50 text-sm sm:text-base">Breakfast</li>
                                    <li className="p-2 cursor-pointer hover:bg-orange-50 text-sm sm:text-base">Lunch</li>
                                    <li className="p-2 cursor-pointer hover:bg-orange-50 text-sm sm:text-base">Dinner</li>
                                    <li className="p-2 cursor-pointer hover:bg-orange-50 text-sm sm:text-base">Drinks</li>
                                </ul>
                            </div>
                        </div>
                        <button className="bg-orange-500 text-white p-3 sm:p-4 rounded-md text-sm sm:text-base w-full sm:w-auto">
                            Explore recipes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;