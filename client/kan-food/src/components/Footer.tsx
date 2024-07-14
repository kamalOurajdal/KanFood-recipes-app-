import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <h1 className="text-3xl font-bold">KanFood</h1>
                        <p className="text-sm">Discover, Cook, Share: Your Culinary Adventure Starts Here</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white hover:text-gray-200">
                                <span className="sr-only">Facebook</span>
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                                <span className="sr-only">Instagram</span>
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                                <span className="sr-only">Twitter</span>
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 sm:grid-cols-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
                                <ul className="mt-4 space-y-2">
                                    {['Home', 'Recipes', 'Blog', 'Community'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm hover:text-gray-200">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Resources</h3>
                                <ul className="mt-4 space-y-2">
                                    {['Cooking Tips', 'Meal Planning', 'Nutrition Guide', 'FAQ'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-sm hover:text-gray-200">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact Us</h3>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li>Tinghir, Morocco</li>
                                <li>Phone: (+212) 607******</li>
                                <li>Email: info@kanfood.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-orange-400 pt-8">
                    <p className="text-base text-center">
                        &copy; {new Date().getFullYear()} KanFood. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;