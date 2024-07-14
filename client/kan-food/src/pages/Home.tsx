import React from 'react';
import HeroHome from "../components/Hero-home";
import ExploreRecipes from "../components/Explore-recipes";
import ListRecipes from "../components/List-recipes";
import RecipeDetails from "./Recipe-details";

function Home(props:any) {
    return (
        <>
            <HeroHome/>
            <ExploreRecipes/>
            <ListRecipes/>
        </>
    );
}

export default Home;