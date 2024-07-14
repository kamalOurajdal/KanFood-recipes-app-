import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import RecipeDetails from "./pages/Recipe-details";
import imageRecipe from "./assets/images/home-hero1.jpg"
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
    const recipe = {
        id: 1,
        title: "Classic Spaghetti Bolognese",
        image: imageRecipe,
        description: "A classic Italian pasta dish that's rich and hearty.",
        prepTime: 20,
        cookTime: 60,
        servings: 4,
        ingredients: [
            "200g spaghetti",
            "100g minced beef",
            "1 onion, chopped",
            "2 garlic cloves, minced",
            "400g can of tomatoes",
            "2 tbsp tomato paste",
            "1 carrot, grated",
            "1 celery stick, chopped",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "Grated Parmesan cheese"
        ],
        instructions: [
            "Heat the olive oil in a large pan over medium heat.",
            "Add the onion, garlic, carrot, and celery, and cook until softened.",
            "Add the minced beef and cook until browned.",
            "Stir in the tomato paste and canned tomatoes.",
            "Season with salt and pepper.",
            "Simmer for 45 minutes, stirring occasionally.",
            "Cook the spaghetti according to the package instructions.",
            "Serve the Bolognese sauce over the spaghetti, topped with grated Parmesan cheese."
        ],
        nutritionInfo: [
            { name: "Calories", value: 450, unit: "kcal" },
            { name: "Protein", value: 25, unit: "g" },
            { name: "Carbohydrates", value: 60, unit: "g" },
            { name: "Fat", value: 15, unit: "g" },
            { name: "Fiber", value: 5, unit: "g" },
            { name: "Sugar", value: 10, unit: "g" },
            { name: "Sodium", value: 800, unit: "mg" }
        ]
    };

    return (
        <section className={"max-w-5xl m-auto font-poppins px-2"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={'/login'} element={<Login />} />
                        <Route path="details" element={<RecipeDetails recipe={recipe}/>} />
                        <Route path="contact" element={<Contact/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </section>
    );
}
export default App;
