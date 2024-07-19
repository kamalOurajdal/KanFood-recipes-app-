import React, {useEffect, useState} from 'react';
import homeHero from '../assets/images/home-hero.jpg';
import {Recipe} from "../models/recipe";
import {from, switchMap} from "rxjs";
import {searchRecipes} from "../services/fetchRecipes";
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function HeroHome(props: any) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate() ;

    useEffect(() => {
        const subscription = from([searchTerm])
            .pipe(
                switchMap((term) => {
                    if (term.length > 2) {
                        return searchRecipes(term);
                    } else {
                        return from(Promise.resolve([]));
                    }
                })
            )
            .subscribe({
                    next: (results) => {
                        setSearchResults(results);
                        setIsDropdownOpen(searchTerm.length > 2);
                    },
                    error: (error) => {
                        console.error('Error fetching search results:', error);
                    }
                }
            );
        return () => subscription.unsubscribe();
    }, [searchTerm]);

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        setIsDropdownOpen(value.length > 2);
    };

    const handleRecipeClick = (id: string) => {
        navigate(`/recipe/${id}`);
    }

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
                        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-8 leading-tight sm:leading-[1.2]">
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
                                <ul className={"max-h-60 overflow-y-auto"}>
                                    {searchResults && searchResults.map((recipe) => (
                                        <li onClick={() => handleRecipeClick(recipe.id)} key={recipe.id} className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                                            <img src={recipe.image} alt="" className={"size-14 object-cover rounded-md"}/>
                                            <div>
                                                <h1 className={""}>{recipe.title}</h1>
                                                <span className={"text-xs text-gray-400"}>{recipe.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                {/*    if there is no result*/}
                                    {searchResults.length === 0 && (
                                        <li className="p-2 text-gray-400">No Recipes found</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;