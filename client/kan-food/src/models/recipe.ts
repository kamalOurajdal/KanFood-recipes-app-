export interface NutritionInfo {
    name: string;
    value: number;
    unit: string;
}

export interface Recipe {
    id: number;
    title: string;
    image: string;
    description: string;
    prepTime: number;
    cookTime: number;
    servings: number;
    ingredients: string[];
    instructions: string[];
    nutritionInfo: NutritionInfo[];
}