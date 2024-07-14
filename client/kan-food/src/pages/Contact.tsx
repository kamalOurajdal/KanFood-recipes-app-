import React, { useState, FormEvent } from "react";
import contact_uc_img from "../assets/images/home-hero1.jpg";
import {Link} from "react-router-dom";

interface FormData {
    fullName: string;
    subject: string;
    email: string;
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        subject: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <section className=" pb-32">
            <div className="w-full max-w-6xl mx-auto  sm:px-6 lg:px-8 ">
                <div className={"bg-gradient-to-b from-orange-100 to-white pt-8 px-4"}>
                    <div className="flex-shrink-0">
                        <Link className="text-3xl font-bold" to={"/"}>
                            Contact Kan<span className="text-orange-500">Food .</span>
                        </Link>
                    </div>
                    <p className="text-gray-600 mb-10  pt-3">
                        Have questions about recipes, need assistance, or want to share your culinary creations?
                        We're here to help! Reach out to us and join our community of food lovers.
                    </p>
                </div>

                <div className="relative mb-20">
                    <div
                        className="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center bg-fixed rounded-lg shadow-xl"
                        style={{ backgroundImage: `url(${contact_uc_img})` }}
                    ></div>
                    <div className="absolute inset-x-0 -bottom-16 flex justify-center">
                        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <i className="fas fa-phone mb-4 text-2xl bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-500"></i>
                                <p className="text-gray-600">
                                    Call us for recipe tips or assistance: +212 506070809
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <i className="fab fa-whatsapp mb-4 text-3xl bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-green-500"></i>
                                <p className="text-gray-600">
                                    Chat with our culinary experts on WhatsApp: +212 07080910 (8 a.m. to 10:00 p.m.)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32 flex flex-col items-center">
                    <div className="text-center mb-8">
                        <h2 className="font-bold text-2xl text-gray-600 mb-2">Share Your Recipe Ideas</h2>
                        <p className="text-gray-600">
                            Got a unique recipe or food question? Send us a message and we'll get back to you as soon as possible.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-2xl text-gray-600 p-8 rounded-lg">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;