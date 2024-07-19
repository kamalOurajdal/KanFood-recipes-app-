import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import axios from 'axios';
import {Recipe} from "../models/recipe";

const BASE_URL = 'http://16.171.3.216';

export const fetchRecipes = (pageSize:number) => {
    const url = `${BASE_URL}/recipes/?page=${pageSize}`;
    return from(axios.get<Recipe[]>(url)).pipe(
        map((response : any)=> response.data),
        catchError((error : any) => {
            console.error('Error fetching recipes:', error);
            throw error;
        })
    );
};


export const fetchRecipeById = (id: string) => {
    const url = `${BASE_URL}/recipes/${id}/`;

    return from(axios.get<Recipe[]>(url)).pipe(
        map((response : any)=> response.data),
        catchError((error : any) => {
            console.error('Error fetching recipes:', error);
            throw error;
        })
    );
}

export const searchRecipes = (searchTerm: string) => {
    const url = `${BASE_URL}/recipes?q=${searchTerm}`;
    return from(axios.get<Recipe[]>(url)).pipe(
        map((response : any)=> response.data),
        catchError((error : any) => {
            console.error('Error fetching recipes:', error);
            throw error;
        })
    );
}

export const getNutritionOfRecipe = (id: string) => {
    const url = `${BASE_URL}/recipes/${id}/nutrition/`;

    return from(axios.get(url)).pipe(
        map((response : any)=> response.data),
        catchError((error : any) => {
            console.error('Error fetching nutrition:', error);
            throw error;
        })
    );

}


export const fetchRecipesByCategory = (categoryId: string) => {
    const url = `${BASE_URL}/categories/${categoryId}/recipes/`;
    return from(axios.get(url)).pipe(
        map((response: any) => response.data),
        catchError((error: any) => {
            console.error('Error fetching recipes:', error);
            throw error;
        })
    );
};

export const fetchCategories = () => {
    const url = `${BASE_URL}/categories/`;
    return from(axios.get(url)).pipe(
        map((response : any)=> response.data),
        catchError((error : any) => {
            console.error('Error fetching categories:', error);
            throw error;
        })
    );
}

