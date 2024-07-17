import categoryRecipes from "../pages/CategoryRecipes";
import {Category} from "./category";

export interface NutritionInfo {
    name: string;
    value: number;
    unit: string;
}

export interface Recipe {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
    categories: Category[];
    ingredients: string[];
    instructions: string[];
    cooking_time: number;
    servings: number;
    created_at: string;
    updated_at: string;
    author: number;
    is_featured: boolean;
    nutrition: NutritionInfo[];
}