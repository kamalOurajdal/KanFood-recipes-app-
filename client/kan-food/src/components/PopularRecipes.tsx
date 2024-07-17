import React, { useEffect, useState } from 'react';
import { Recipe } from "../models/recipe";
import { fetchRecipes } from "../services/fetchRecipes";
import Paginator from "./Paginator";
import {Subscription} from "rxjs";
import ListRecipe from "./List-recipe";

function PopularRecipes() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<Error | null>(null);

const PAGE_SIZE = 10;

    useEffect(() => {
        const subscription: Subscription = fetchRecipes(currentPage).subscribe({
            next: data => {
                setRecipes(data.results)
                setTotalPages(Math.ceil(Number(data.count / PAGE_SIZE)))
            },
            error: err => {
                setError(err)
                console.error(err)
            },
        });
        return () => subscription.unsubscribe();
    }, [currentPage]);



    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="container mx-auto px-2 my-8">
            <h1 className="font-bold text-3xl mb-6 text-center md:text-left">Popular Recipes</h1>

            <ListRecipe recipes={recipes}/>
            <div className="mt-8">
                <Paginator currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default PopularRecipes;