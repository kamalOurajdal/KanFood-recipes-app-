import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { fetchRecipesByCategory } from '../services/fetchRecipes'; // Assume this service exists
import { Recipe } from '../models/recipe';
import {Subscription} from "rxjs";

interface RouteParams {
    categoryId: string;
}

const CategoryRecipes: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();

    useEffect(() => {
        let recipeSubscription: Subscription | null = null;
        if (id){
            setLoading(true);
            recipeSubscription = fetchRecipesByCategory(id).subscribe({
                next: data => {
                    setRecipes(data);
                    console.log(data);
                    setLoading(false);
                },
                error: err => {
                    setError('Failed to load recipes. Please try again later.');
                    setLoading(false);
                },
            });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 p-4">
                {error}
            </div>
        );
    }
    const handleRecipeClick = (recipeId: string) => {
        navigate(`/recipe/${recipeId}`);
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Recipes for {recipes.length > 0 ? recipes[0].categories[0].name : 'this category'}
            </h1>
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
                            <p className="text-gray-600 text-sm line-clamp-2">{recipe.description.substring(0, 100)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryRecipes;
