'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex max-w-4xl rounded-2xl bg-white shadow-lg">
        {/* Left Form Section */}
        <div className="w-full p-8 md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-700">Login</h2>
          <p className="text-sm text-gray-600 mb-4">Login to access your Vacatina account</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="john.doe@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="********"
                required
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Don&#39;t have an account?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">Or login with</div>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="flex items-center justify-center rounded border border-gray-300 p-2 text-gray-600 hover:bg-gray-100">
              <FaFacebookF className="mr-2" /> Facebook
            </button>
            <button className="flex items-center justify-center rounded border border-gray-300 p-2 text-gray-600 hover:bg-gray-100">
              <FaGoogle className="mr-2" /> Google
            </button>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="hidden w-1/2 md:block relative">
          <Image
            src="/path-to-image.jpg" // Replace with your image path
            alt="Login Illustration"
            fill
            className="rounded-r-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
