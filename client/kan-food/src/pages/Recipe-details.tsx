import React, { useState } from 'react';
import { Clock, Users, ChefHat, Printer, BookmarkPlus, Share2} from 'lucide-react';
import InfoCard from "../components/InfoCard";
import Dialog from "../components/Dialog";
import Button from "../components/Button";
import {Recipe} from "../models/recipe";
import ingredientsImg from '../assets/images/ingredients.png';

interface RecipeDetailsProps {
    recipe: Recipe;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {

    const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 ">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold">{recipe.title}</h1>
                </div>
            </header>

            <main className="container mx-auto py-8">
                <div className="bg-white rounded-lg overflow-hidden">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover" />

                    <div>
                        <p className="text-gray-600 mb-6 text-lg">{recipe.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            <InfoCard icon={<Clock className="text-orange-500"/>} label="Prep Time"
                                      value={`${recipe.prepTime} mins`}/>
                            <InfoCard icon={<ChefHat className="text-orange-500"/>} label="Cook Time"
                                      value={`${recipe.cookTime} mins`}/>
                            <InfoCard icon={<Users className="text-orange-500"/>} label="Servings"
                                      value={recipe.servings}/>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                            <Button onClick={() => window.print()} >
                                <Printer /> Print
                            </Button>
                            <Button variant="outline">
                                <BookmarkPlus /> Save
                            </Button>
                            <Button variant="outline" onClick={() => setIsShareDialogOpen(true)}>
                                <Share2  /> Share
                            </Button>
                        </div>

                        <div className={"mt-8"}>
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Ingredients</h2>
                            <ul className="list-disc list-inside space-y-2 pl-4 z-10">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="text-gray-700 text-sm md:text-base">{ingredient}</li>
                                ))}
                            </ul>

                        </div>

                        <div className={"mt-8"}>
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Instructions</h2>
                            <ol className="space-y-4">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index} className="flex items-start">
                                      <span
                                          className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                        {index + 1}
                                      </span>
                                        <p className="text-gray-700  text-sm md:text-base">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>


                        {recipe.nutritionInfo.length > 0 && (
                            <div className={"mt-8"}>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Nutrition Information</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                        <tr className="border-b text-orange-500">
                                            <th className="py-2">Nutrient</th>
                                            <th className="py-2 text-right">Amount</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {recipe.nutritionInfo.map((item, index) => (
                                            <tr key={index} className="border-b last:border-b-0">
                                                <td className="py-2">{item.name}</td>
                                                <td className="py-2 text-right">{item.value} {item.unit}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </main>

            <Dialog isOpen={isShareDialogOpen} onClose={() => setIsShareDialogOpen(false)}>
                <h2 className="text-lg font-semibold mb-4">Share this recipe</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Facebook</Button>
                    <Button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white">Twitter</Button>
                    <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">Email</Button>
                </div>
            </Dialog>
        </div>
    );
};


export default RecipeDetails;