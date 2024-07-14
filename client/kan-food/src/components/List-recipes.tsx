import React, { useState } from 'react';
import { listRecipes } from "../assets/recipes/assets";
import Paginator from "./Paginator";

function ListRecipes(props: any) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Example total pages

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(page);
    };

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 my-8">
            <h1 className="font-bold text-2xl sm:text-3xl mb-6">Popular Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {listRecipes.map((recipe, index) => (
                    <div
                        key={index}
                        className="rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden"
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="font-bold text-lg mb-2 line-clamp-1">{recipe.name}</h2>
                            <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <Paginator currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default ListRecipes;