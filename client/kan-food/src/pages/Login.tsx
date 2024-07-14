import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Eye, EyeOff, Mail, Lock, Github, Twitter, Facebook, User } from 'lucide-react';

interface FormErrors {
    email?: string;
    password?: string;
    name?: string;
}

const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): FormErrors => {
        let formErrors: FormErrors = {};
        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!password) {
            formErrors.password = 'Password is required';
        } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
        }
        if (!isLogin && !name) {
            formErrors.name = 'Name is required';
        }
        return formErrors;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Handle successful login or signup
            console.log(isLogin ? 'Login successful' : 'Signup successful', { email, password, name });
        } else {
            setErrors(formErrors);
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setErrors({});
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center p-4">
            <div
                className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md transform transition-all duration-300 ease-in-out ">

                <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">Welcome to KanFood</h2>
                <p className="text-center text-gray-600 mb-4">
                    Discover, share, and explore delicious recipes from around the world.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (

                        <div className="transition-all duration-300 ease-in-out">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400"/>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out`}
                                    placeholder="Your name"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </div>
                            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400"/>
                            </div>
                            <input
                                type="email"
                                id="email"
                                className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out`}
                                placeholder="you@example.com"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400"/>
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className={`block w-full pl-10 pr-10 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out`}
                                placeholder="••••••••"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-gray-500 focus:outline-none transition duration-150 ease-in-out"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                                </button>
                            </div>
                        </div>
                        {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                    </div>
                    {isLogin && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                        >
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Join our community of food lovers!</p>
                    <p>Share your favorite recipes and discover new culinary adventures.</p>
                </div>
                <div className="mt-6 text-center">
                    <button
                        onClick={toggleAuthMode}
                        className=""
                    >
                        {isLogin ?  "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;