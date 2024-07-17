import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import RecipeDetails from "./pages/Recipe-details";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import CategoryRecipes from "./pages/CategoryRecipes";

function App() {

    return (
        <section className={"max-w-5xl m-auto font-poppins px-2"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={'/login'} element={<Login />} />
                        <Route path="/recipe/:id" element={<RecipeDetails />}/>
                        <Route path="/categories/:id/recipes" element={<CategoryRecipes />}/>
                        <Route path="contact" element={<Contact/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </section>
    );
}
export default App;
