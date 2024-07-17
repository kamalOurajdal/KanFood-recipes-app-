import React from 'react';
import { Recipe } from '../models/recipe';
import {useNavigate} from "react-router-dom";

interface ListRecipesProps {
    recipes: Recipe[];
}

const ListRecipe: React.FC<ListRecipesProps> = ({ recipes }) => {
    const navigate = useNavigate();
    const handleRecipeClick = (recipeId: string) => {
        navigate(`/recipe/${recipeId}`);
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    onClick={() => handleRecipeClick(recipe.id)}
                    className="rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden"
                >
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="font-bold text-lg mb-2 truncate">{recipe.title}</h2>
                        <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListRecipe;
