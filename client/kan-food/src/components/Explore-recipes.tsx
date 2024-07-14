import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <button className="text-white font-bold text-lg sm:text-xl absolute top-1/3 -right-2 h-8 w-8 md:w-10 md:h-10 bg-orange-500 rounded-full z-20 flex items-center justify-center">
                &#x2192;
            </button>
        </div>
    );
};

const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <button className="text-white font-bold text-lg sm:text-xl absolute top-1/3 -left-2 h-8 w-8 md:w-10 md:h-10 bg-orange-500 rounded-full z-20 flex items-center justify-center">
                &#x2190;
            </button>
        </div>
    );
};

function ExploreRecipes(props: any) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                },
            },
        ],
    };

    const Sdata = [
        {
            id: 1,
            title: "Sandwich",
            img: require("../assets/images/sandwich.png"),
        },
        {
            id: 2,
            title: "Salad",
            img: require("../assets/images/salad.png"),
        },
        {
            id: 3,
            title: "Desert",
            img: require("../assets/images/desert.png"),
        },
        {
            id: 4,
            title: "Cake",
            img: require("../assets/images/cake.png"),
        },
        {
            id: 5,
            title: "Roll",
            img: require("../assets/images/roll.png"),
        },
        {
            id: 6,
            title: "Noodles",
            img: require("../assets/images/noodels.png"),
        },
    ];

    return (
        <div className="mt-8 sm:px-6 lg:px-8">
            <h1 className="font-bold text-2xl sm:text-3xl mb-2">Explore Our Recipes</h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
                Discover a world of flavors with our curated selection of recipes.
                From quick snacks to gourmet meals, find inspiration for every occasion
                and elevate your culinary skills with step-by-step guides.
            </p>
            <div className="relative px-4">
                <Slider {...settings} className="mx-auto max-w-7xl">
                    {Sdata.map((component, index) => (
                        <div key={index} className="group p-2 sm:p-4 flex flex-col items-center text-center">
                            <div className="w-full aspect-square overflow-hidden rounded-md">
                                <img
                                    src={component.img}
                                    alt={component.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transform duration-300 ease-in-out cursor-pointer"
                                />
                            </div>
                            <h2 className="mt-2 text-gray-600 text-sm sm:text-base">{component.title}</h2>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ExploreRecipes;