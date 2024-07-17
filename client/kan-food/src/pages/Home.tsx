import React from 'react';
import HeroHome from "../components/Hero-home";
import ExploreCategories from "../components/ExploreCategories";
import PopularRecipes from "../components/PopularRecipes";

function Home() {
    return (
        <>
            <HeroHome/>
            <ExploreCategories/>
            <PopularRecipes/>
        </>
    );
}

export default Home;