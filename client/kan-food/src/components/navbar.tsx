import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRecipesOpen, setIsRecipesOpen] = useState(false);

    const RecipeSuggestions = [
        {
            title: "Breakfast",
            href: "/recipes/breakfast",
            description: "Prep your breakfast with these easy recipes."
        },
        {
            title: "Lunch",
            href: "/recipes/lunch",
            description: "Prep your lunch with these easy recipes."
        },
        {
            title: "Dinner",
            href: "/recipes/dinner",
            description: "Prep your dinner with these easy recipes."
        },
        {
            title: "Drinks",
            href: "/recipes/drinks",
            description: "Prep your drinks with these easy recipes."
        }
    ];

    return (

        <nav className="bg-white relative z-50 border-b">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link className="text-3xl font-bold" to={"/"}>
                            Kan<span className="text-orange-500">Food .</span>
                        </Link>
                    </div>

                    {/* Large Screens NavBar*/}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <div className="relative">
                                <button
                                    onClick={() => setIsRecipesOpen(!isRecipesOpen)}
                                    className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                                >
                                    Recipes
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                {isRecipesOpen && (
                                    <div className="absolute -left-3/4 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1 grid grid-cols-2 gap-2">
                                            {RecipeSuggestions.map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                                    onClick={() => setIsRecipesOpen(false)}
                                                >
                                                    <p className="font-medium">{item.title}</p>
                                                    <p className="text-xs text-gray-500">{item.description}</p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link to="/contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Menu Icon (small screens)*/}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Small Screens  NavBar*/}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <div>
                            <button
                                onClick={() => setIsRecipesOpen(!isRecipesOpen)}
                                className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                            >
                                Recipes
                                <ChevronDown className={`h-4 w-4 transform ${isRecipesOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
                            </button>
                            {isRecipesOpen && (
                                <div className="mt-2 space-y-2 pl-4">
                                    {RecipeSuggestions.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                            onClick={() => {
                                                setIsRecipesOpen(false);
                                                setIsOpen(false);
                                            }}
                                        >
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-xs text-gray-500">{item.description}</p>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link to="/contact" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;